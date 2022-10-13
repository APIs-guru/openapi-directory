from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDataRequestPathParams:
    data_request_id: str = field(default=None, metadata={'path_param': { 'field_name': 'data_request_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDataRequestSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetDataRequestRequest:
    path_params: GetDataRequestPathParams = field(default=None)
    security: GetDataRequestSecurity = field(default=None)
    

@dataclass
class GetDataRequestResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    submission_data_request: Optional[shared.SubmissionDataRequest] = field(default=None)
    
