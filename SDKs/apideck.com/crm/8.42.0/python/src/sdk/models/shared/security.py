from dataclasses import dataclass, field



@dataclass
class SchemeAPIKey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeApplicationID:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'x-apideck-app-id' }})
    

@dataclass
class SchemeConsumerID:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'x-apideck-consumer-id' }})
    

@dataclass
class Security:
    consumer_id: SchemeConsumerID = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    api_key: SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    application_id: SchemeApplicationID = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
