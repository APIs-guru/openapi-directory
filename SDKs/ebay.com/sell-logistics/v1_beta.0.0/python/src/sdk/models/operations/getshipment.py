from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetShipmentPathParams:
    shipment_id: str = field(metadata={'path_param': { 'field_name': 'shipmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetShipmentSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetShipmentRequest:
    path_params: GetShipmentPathParams = field()
    security: GetShipmentSecurity = field()
    

@dataclass
class GetShipmentResponse:
    content_type: str = field()
    status_code: int = field()
    shipment: Optional[shared.Shipment] = field(default=None)
    
