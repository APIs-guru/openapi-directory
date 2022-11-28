from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CancelShipmentPathParams:
    shipment_id: str = field(metadata={'path_param': { 'field_name': 'shipmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelShipmentSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CancelShipmentRequest:
    path_params: CancelShipmentPathParams = field()
    security: CancelShipmentSecurity = field()
    

@dataclass
class CancelShipmentResponse:
    content_type: str = field()
    status_code: int = field()
    shipment: Optional[shared.Shipment] = field(default=None)
    
