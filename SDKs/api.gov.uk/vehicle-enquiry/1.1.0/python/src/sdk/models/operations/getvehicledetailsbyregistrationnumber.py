from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVehicleDetailsByRegistrationNumberHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    x_correlation_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Correlation-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVehicleDetailsByRegistrationNumberRequest:
    headers: GetVehicleDetailsByRegistrationNumberHeaders = field()
    request: shared.VehicleRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetVehicleDetailsByRegistrationNumberResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    vehicle: Optional[shared.Vehicle] = field(default=None)
    
