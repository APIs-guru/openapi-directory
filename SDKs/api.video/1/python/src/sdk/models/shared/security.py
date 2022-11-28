from dataclasses import dataclass, field



@dataclass
class SchemeBearerAuth:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
