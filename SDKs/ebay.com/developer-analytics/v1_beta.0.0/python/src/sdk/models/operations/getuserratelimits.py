from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetUserRateLimitsQueryParams:
    api_context: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_context', 'style': 'form', 'explode': True }})
    api_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserRateLimitsSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class GetUserRateLimits500ApplicationJSON:
    errors: Optional[List[shared.Error]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetUserRateLimitsRequest:
    query_params: GetUserRateLimitsQueryParams = field()
    security: GetUserRateLimitsSecurity = field()
    

@dataclass
class GetUserRateLimitsResponse:
    content_type: str = field()
    status_code: int = field()
    rate_limits_response: Optional[shared.RateLimitsResponse] = field(default=None)
    get_user_rate_limits_500_application_json_object: Optional[GetUserRateLimits500ApplicationJSON] = field(default=None)
    
