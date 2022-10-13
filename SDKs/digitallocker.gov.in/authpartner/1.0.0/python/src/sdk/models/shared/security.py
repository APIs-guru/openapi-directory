from dataclasses import dataclass, field



@dataclass
class SchemeCustomkey2:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'X-2' }})
    

@dataclass
class SchemeCustomkeys1:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'X1123' }})
    

@dataclass
class SchemeBearerAuth:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeOauthAuthorizeCode:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeOauthsecurity:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
