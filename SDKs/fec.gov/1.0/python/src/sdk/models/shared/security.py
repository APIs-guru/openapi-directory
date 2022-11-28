from dataclasses import dataclass, field



@dataclass
class SchemeAPIKeyHeaderAuth:
    api_key: str = field(metadata={'security': { 'field_name': 'X-Api-Key' }})
    

@dataclass
class SchemeAPIKeyQueryAuth:
    api_key: str = field(metadata={'security': { 'field_name': 'api_key' }})
    

@dataclass
class SchemeAPIKey:
    api_key: str = field(metadata={'security': { 'field_name': 'api_key' }})
    

@dataclass
class Security:
    api_key_header_auth: SchemeAPIKeyHeaderAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    api_key_query_auth: SchemeAPIKeyQueryAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    api_key: SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    
