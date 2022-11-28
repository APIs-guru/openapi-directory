from dataclasses import dataclass, field



@dataclass
class SchemeCustomkeys1:
    api_key: str = field(metadata={'security': { 'field_name': 'X1123' }})
    

@dataclass
class SchemeBearerAuth:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeOauthAuthorizeCode:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeOauthsecurity:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeCustomkey2:
    api_key: str = field(metadata={'security': { 'field_name': 'X-2' }})
    
