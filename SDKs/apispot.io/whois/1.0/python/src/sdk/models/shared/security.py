from dataclasses import dataclass, field



@dataclass
class SchemeAPIKeyAuth:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'X-API-KEY' }})
    

@dataclass
class Security:
    api_key_auth: SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
