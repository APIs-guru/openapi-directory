from dataclasses import dataclass, field



@dataclass
class SchemeAPIKeyAuth:
    api_key: str = field(metadata={'security': { 'field_name': 'api_key' }})
    
