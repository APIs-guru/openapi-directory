from dataclasses import dataclass, field



@dataclass
class SchemeAPITokenBasic:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
