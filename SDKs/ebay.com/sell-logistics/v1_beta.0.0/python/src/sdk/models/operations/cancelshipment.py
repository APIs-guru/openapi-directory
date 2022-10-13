from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CancelShipmentPathParams:
    shipment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'shipmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelShipmentSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CancelShipmentRequest:
    path_params: CancelShipmentPathParams = field(default=None)
    security: CancelShipmentSecurity = field(default=None)
    

@dataclass
class CancelShipmentResponse:
    content_type: str = field(default=None)
    shipment: Optional[shared.Shipment] = field(default=None)
    status_code: int = field(default=None)
    
