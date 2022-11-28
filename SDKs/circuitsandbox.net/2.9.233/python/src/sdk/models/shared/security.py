from dataclasses import dataclass, field



@dataclass
class SchemeOauth:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
