from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetVehicleSeenVehicleSeenGetQueryParams:
    after_date: datetime = field(default=None, metadata={'query_param': { 'field_name': 'afterDate', 'style': 'form', 'explode': True }})
    jwt: str = field(default=None, metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    vin: str = field(default=None, metadata={'query_param': { 'field_name': 'vin', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVehicleSeenVehicleSeenGetRequest:
    query_params: GetVehicleSeenVehicleSeenGetQueryParams = field(default=None)
    

@dataclass
class GetVehicleSeenVehicleSeenGetResponse:
    boolean_resp: Optional[shared.BooleanResp] = field(default=None)
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    status_code: int = field(default=None)
    
