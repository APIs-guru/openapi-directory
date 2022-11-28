from dataclasses import dataclass, field



@dataclass
class SchemeBasic:
    password: str = field(metadata={'security': { 'field_name': 'password' }})
    username: str = field(metadata={'security': { 'field_name': 'username' }})
    

@dataclass
class Security:
    basic: SchemeBasic = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
