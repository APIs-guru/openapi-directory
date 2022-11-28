from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DownloadLabelFilePathParams:
    shipment_id: str = field(metadata={'path_param': { 'field_name': 'shipmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadLabelFileSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DownloadLabelFileRequest:
    path_params: DownloadLabelFilePathParams = field()
    security: DownloadLabelFileSecurity = field()
    

@dataclass
class DownloadLabelFileResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
