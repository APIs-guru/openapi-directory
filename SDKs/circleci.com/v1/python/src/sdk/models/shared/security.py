from dataclasses import dataclass, field



@dataclass
class SchemeApikey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'circle-token' }})
    

@dataclass
class Security:
    apikey: SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    
