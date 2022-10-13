from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVehicleDetailsByRegistrationNumberHeaders:
    x_correlation_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Correlation-Id' }})
    x_api_key: str = field(default=None, metadata={'header': { 'field_name': 'x-api-key' }})
    

@dataclass
class GetVehicleDetailsByRegistrationNumberRequest:
    headers: GetVehicleDetailsByRegistrationNumberHeaders = field(default=None)
    request: shared.VehicleRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetVehicleDetailsByRegistrationNumberResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    vehicle: Optional[shared.Vehicle] = field(default=None)
    
