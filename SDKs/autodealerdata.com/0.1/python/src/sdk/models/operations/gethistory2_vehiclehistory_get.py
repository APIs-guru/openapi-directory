from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetHistory2VehicleHistoryGetQueryParams:
    jwt: str = field(default=None, metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    vin: str = field(default=None, metadata={'query_param': { 'field_name': 'vin', 'style': 'form', 'explode': True }})
    

@dataclass
class GetHistory2VehicleHistoryGetRequest:
    query_params: GetHistory2VehicleHistoryGetQueryParams = field(default=None)
    

@dataclass
class GetHistory2VehicleHistoryGetResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    history_resp: Optional[shared.HistoryResp] = field(default=None)
    status_code: int = field(default=None)
    
