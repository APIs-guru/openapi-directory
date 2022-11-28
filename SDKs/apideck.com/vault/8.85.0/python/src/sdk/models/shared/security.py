from dataclasses import dataclass, field



@dataclass
class SchemeAPIKey:
    api_key: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeApplicationID:
    api_key: str = field(metadata={'security': { 'field_name': 'x-apideck-app-id' }})
    

@dataclass
class Security:
    api_key: SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    application_id: SchemeApplicationID = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
