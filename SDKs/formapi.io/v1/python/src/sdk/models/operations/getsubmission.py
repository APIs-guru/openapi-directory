from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSubmissionPathParams:
    submission_id: str = field(metadata={'path_param': { 'field_name': 'submission_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubmissionQueryParams:
    include_data: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_data', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubmissionSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetSubmissionRequest:
    path_params: GetSubmissionPathParams = field()
    query_params: GetSubmissionQueryParams = field()
    security: GetSubmissionSecurity = field()
    

@dataclass
class GetSubmissionResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    submission: Optional[shared.Submission] = field(default=None)
    
