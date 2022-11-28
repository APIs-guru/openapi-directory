from dataclasses import dataclass, field



@dataclass
class SchemeXapiKey:
    api_key: str = field(metadata={'security': { 'field_name': 'api_key' }})
    

@dataclass
class Security:
    x_api_key: SchemeXapiKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
