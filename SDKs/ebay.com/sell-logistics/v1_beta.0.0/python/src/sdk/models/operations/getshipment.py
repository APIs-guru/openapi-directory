from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetShipmentPathParams:
    shipment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'shipmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetShipmentSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetShipmentRequest:
    path_params: GetShipmentPathParams = field(default=None)
    security: GetShipmentSecurity = field(default=None)
    

@dataclass
class GetShipmentResponse:
    content_type: str = field(default=None)
    shipment: Optional[shared.Shipment] = field(default=None)
    status_code: int = field(default=None)
    
