from dataclasses import dataclass, field



@dataclass
class SchemeTokenHeader:
    api_key: str = field(metadata={'security': { 'field_name': 'token' }})
    

@dataclass
class Security:
    token_header: SchemeTokenHeader = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
