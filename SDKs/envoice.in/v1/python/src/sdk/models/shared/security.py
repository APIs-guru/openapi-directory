from dataclasses import dataclass, field



@dataclass
class SchemeXAuthKey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'x-auth-key' }})
    

@dataclass
class SchemeXAuthSecret:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'x-auth-secret' }})
    
