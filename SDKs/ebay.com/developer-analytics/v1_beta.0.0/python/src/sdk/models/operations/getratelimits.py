from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetRateLimitsQueryParams:
    api_context: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_context', 'style': 'form', 'explode': True }})
    api_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRateLimitsSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class GetRateLimits500ApplicationJSON:
    errors: Optional[List[shared.Error]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetRateLimitsRequest:
    query_params: GetRateLimitsQueryParams = field()
    security: GetRateLimitsSecurity = field()
    

@dataclass
class GetRateLimitsResponse:
    content_type: str = field()
    status_code: int = field()
    rate_limits_response: Optional[shared.RateLimitsResponse] = field(default=None)
    get_rate_limits_500_application_json_object: Optional[GetRateLimits500ApplicationJSON] = field(default=None)
    
