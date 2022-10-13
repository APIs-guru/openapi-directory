from dataclasses import dataclass, field



@dataclass
class SchemeAPIKey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeBasic:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeOauth2:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
