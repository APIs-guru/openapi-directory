from dataclasses import dataclass, field



@dataclass
class SchemeAPIKey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeCertAuth:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
