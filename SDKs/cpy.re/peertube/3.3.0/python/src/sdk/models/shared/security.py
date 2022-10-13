from dataclasses import dataclass, field



@dataclass
class SchemeOAuth2:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
