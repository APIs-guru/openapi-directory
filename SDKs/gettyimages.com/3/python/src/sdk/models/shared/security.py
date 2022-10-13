from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeAPIKey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'Api-Key' }})
    

@dataclass
class SchemeOAuth2:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SecurityOption1:
    api_key: SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SecurityOption2:
    o_auth2: SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Security:
    option1: Optional[SecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    
