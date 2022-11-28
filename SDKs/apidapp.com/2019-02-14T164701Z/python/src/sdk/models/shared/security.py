from dataclasses import dataclass, field



@dataclass
class SchemeKey2:
    api_key: str = field(metadata={'security': { 'field_name': 'X-Api-Key' }})
    
