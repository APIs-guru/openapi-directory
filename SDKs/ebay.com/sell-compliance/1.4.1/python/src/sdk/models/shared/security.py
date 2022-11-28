from dataclasses import dataclass, field



@dataclass
class SchemeAPIAuth:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
