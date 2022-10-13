from dataclasses import dataclass, field



@dataclass
class SchemeAPIKey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'X-APISETU-APIKEY' }})
    

@dataclass
class SchemeClientID:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'X-APISETU-CLIENTID' }})
    
