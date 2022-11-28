from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeBasic:
    password: str = field(metadata={'security': { 'field_name': 'password' }})
    username: str = field(metadata={'security': { 'field_name': 'username' }})
    

@dataclass
class SchemeToken:
    api_key: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    basic: Optional[SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    token: Optional[SchemeToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
