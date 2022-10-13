from dataclasses import dataclass, field



@dataclass
class SchemeAPIKey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'x-api-key' }})
    

@dataclass
class SchemeFdcAuth:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
