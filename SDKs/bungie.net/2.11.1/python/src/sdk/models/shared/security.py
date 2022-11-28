from dataclasses import dataclass, field



@dataclass
class SchemeAPIKey:
    api_key: str = field(metadata={'security': { 'field_name': 'X-API-Key' }})
    

@dataclass
class SchemeOauth2:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
