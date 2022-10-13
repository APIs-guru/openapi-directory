from dataclasses import dataclass, field



@dataclass
class SchemeHeaderAPIKey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeQueryAPIKey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'apikey' }})
    

@dataclass
class Security:
    header_api_key: SchemeHeaderAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
