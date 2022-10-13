from dataclasses import dataclass, field



@dataclass
class SchemeTokenHeader:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'token' }})
    

@dataclass
class Security:
    token_header: SchemeTokenHeader = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
