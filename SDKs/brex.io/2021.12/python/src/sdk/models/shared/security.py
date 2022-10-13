from dataclasses import dataclass, field



@dataclass
class SchemeUserKey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'user_key' }})
    
