from dataclasses import dataclass, field



@dataclass
class SchemeAPIKeyAuth:
    api_key: str = field(metadata={'security': { 'field_name': 'x-functions-key' }})
    

@dataclass
class SchemeOAuth2:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
