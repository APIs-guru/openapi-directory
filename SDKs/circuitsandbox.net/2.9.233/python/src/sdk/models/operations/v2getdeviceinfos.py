from dataclasses import dataclass, field



@dataclass
class V2GetDeviceInfosSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class V2GetDeviceInfosRequest:
    security: V2GetDeviceInfosSecurity = field(default=None)
    

@dataclass
class V2GetDeviceInfosResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
