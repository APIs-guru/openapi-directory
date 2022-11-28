from dataclasses import dataclass, field



@dataclass
class SchemeOAuth2:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
