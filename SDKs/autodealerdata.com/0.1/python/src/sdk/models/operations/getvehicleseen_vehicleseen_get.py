from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetVehicleSeenVehicleSeenGetQueryParams:
    after_date: date = field(metadata={'query_param': { 'field_name': 'afterDate', 'style': 'form', 'explode': True }})
    jwt: str = field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    vin: str = field(metadata={'query_param': { 'field_name': 'vin', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVehicleSeenVehicleSeenGetRequest:
    query_params: GetVehicleSeenVehicleSeenGetQueryParams = field()
    

@dataclass
class GetVehicleSeenVehicleSeenGetResponse:
    content_type: str = field()
    status_code: int = field()
    boolean_resp: Optional[shared.BooleanResp] = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    
