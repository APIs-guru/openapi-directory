from dataclasses import dataclass, field



@dataclass
class SchemeJwt:
    api_key: str = field(metadata={'security': { 'field_name': 'X-Appwrite-JWT' }})
    

@dataclass
class SchemeLocale:
    api_key: str = field(metadata={'security': { 'field_name': 'X-Appwrite-Locale' }})
    

@dataclass
class SchemeProject:
    api_key: str = field(metadata={'security': { 'field_name': 'X-Appwrite-Project' }})
    
