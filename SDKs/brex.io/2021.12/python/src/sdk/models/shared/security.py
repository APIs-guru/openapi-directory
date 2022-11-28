from dataclasses import dataclass, field



@dataclass
class SchemeUserKey:
    api_key: str = field(metadata={'security': { 'field_name': 'user_key' }})
    
