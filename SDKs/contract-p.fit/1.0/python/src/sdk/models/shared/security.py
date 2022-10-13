from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeBasic:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeToken:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SecurityOption1:
    basic: SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class SecurityOption2:
    token: SchemeToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class Security:
    option1: Optional[SecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    
