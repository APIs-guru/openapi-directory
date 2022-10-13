from dataclasses import dataclass, field



@dataclass
class SchemeOauth:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
