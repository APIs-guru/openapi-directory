from dataclasses import dataclass, field



@dataclass
class SchemeHmac:
    api_key: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    hmac: SchemeHmac = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
