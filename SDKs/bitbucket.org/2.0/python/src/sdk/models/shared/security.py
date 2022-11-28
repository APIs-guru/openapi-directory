from dataclasses import dataclass, field



@dataclass
class SchemeBasic:
    password: str = field(metadata={'security': { 'field_name': 'password' }})
    username: str = field(metadata={'security': { 'field_name': 'username' }})
    

@dataclass
class SchemeOauth2:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeAPIKey:
    api_key: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
