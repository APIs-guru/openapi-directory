from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ValidatePinRequestQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class ValidatePinRequestRequest:
    query_params: ValidatePinRequestQueryParams = field()
    request: shared.EeValidatePinRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ValidatePinRequestResponse:
    content_type: str = field()
    status_code: int = field()
    ee_validate_pin_response: Optional[shared.EeValidatePinResponse] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
