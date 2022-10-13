from dataclasses import dataclass, field



@dataclass
class SchemeXapiKey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'api_key' }})
    

@dataclass
class Security:
    x_api_key: SchemeXapiKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
