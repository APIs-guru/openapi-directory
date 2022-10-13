from dataclasses import dataclass, field



@dataclass
class SchemeAccountAuth:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeProfileAuth:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeResetPasswordAuth:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'authorization' }})
    

@dataclass
class SchemeVerifyEmailAuth:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'authorization' }})
    
