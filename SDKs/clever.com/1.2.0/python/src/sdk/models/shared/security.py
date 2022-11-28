from dataclasses import dataclass, field



@dataclass
class SchemeOauth:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    oauth: SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
