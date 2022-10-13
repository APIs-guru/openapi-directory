from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class ValidatePinRequestQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class ValidatePinRequestRequest:
    query_params: ValidatePinRequestQueryParams = field(default=None)
    request: shared.EeValidatePinRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ValidatePinRequestResponse:
    content_type: str = field(default=None)
    ee_validate_pin_response: Optional[shared.EeValidatePinResponse] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
