from dataclasses import dataclass, field



@dataclass
class SchemeClientID:
    api_key: str = field(metadata={'security': { 'field_name': 'X-APISETU-CLIENTID' }})
    

@dataclass
class SchemeAPIKey:
    api_key: str = field(metadata={'security': { 'field_name': 'X-APISETU-APIKEY' }})
    
