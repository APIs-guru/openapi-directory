from dataclasses import dataclass, field



@dataclass
class SchemeXAuthKey:
    api_key: str = field(metadata={'security': { 'field_name': 'x-auth-key' }})
    

@dataclass
class SchemeXAuthSecret:
    api_key: str = field(metadata={'security': { 'field_name': 'x-auth-secret' }})
    
