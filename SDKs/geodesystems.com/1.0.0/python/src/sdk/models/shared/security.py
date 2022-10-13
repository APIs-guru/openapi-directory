from dataclasses import dataclass, field



@dataclass
class SchemeBasic:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
