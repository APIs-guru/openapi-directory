from dataclasses import dataclass, field



@dataclass
class DownloadLabelFilePathParams:
    shipment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'shipmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadLabelFileSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DownloadLabelFileRequest:
    path_params: DownloadLabelFilePathParams = field(default=None)
    security: DownloadLabelFileSecurity = field(default=None)
    

@dataclass
class DownloadLabelFileResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
