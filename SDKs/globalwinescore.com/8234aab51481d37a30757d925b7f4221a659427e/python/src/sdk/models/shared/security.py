from dataclasses import dataclass, field



@dataclass
class SchemeTokenAuthentication:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    token_authentication: SchemeTokenAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
