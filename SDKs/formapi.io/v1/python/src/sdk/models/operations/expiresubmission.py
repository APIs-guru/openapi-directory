from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExpireSubmissionPathParams:
    submission_id: str = field(default=None, metadata={'path_param': { 'field_name': 'submission_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExpireSubmissionSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ExpireSubmissionRequest:
    path_params: ExpireSubmissionPathParams = field(default=None)
    security: ExpireSubmissionSecurity = field(default=None)
    

@dataclass
class ExpireSubmissionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    submission: Optional[shared.Submission] = field(default=None)
    
