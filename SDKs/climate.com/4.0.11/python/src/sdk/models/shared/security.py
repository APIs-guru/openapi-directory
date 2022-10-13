from dataclasses import dataclass, field



@dataclass
class SchemeAPIKey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'X-Api-Key' }})
    

@dataclass
class SchemeOauth2AuthorizationCode:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
