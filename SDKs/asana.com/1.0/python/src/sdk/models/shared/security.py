from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeOauth2:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemePersonalAccessToken:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SecurityOption1:
    personal_access_token: SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class SecurityOption2:
    oauth2: SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Security:
    option1: Optional[SecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    
