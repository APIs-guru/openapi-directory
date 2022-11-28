from dataclasses import dataclass, field



@dataclass
class SchemeHeaderAPIKey:
    api_key: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    header_api_key: SchemeHeaderAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SchemeQueryAPIKey:
    api_key: str = field(metadata={'security': { 'field_name': 'apikey' }})
    
