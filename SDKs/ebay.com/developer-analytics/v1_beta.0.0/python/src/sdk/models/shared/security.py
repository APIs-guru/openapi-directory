from dataclasses import dataclass, field



@dataclass
class SchemeAPIAuth:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
