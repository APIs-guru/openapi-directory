from dataclasses import dataclass, field



@dataclass
class SchemeAPIKey:
    api_key: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeCertAuth:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
