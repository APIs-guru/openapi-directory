from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateDataRequestTokenPathParams:
    data_request_id: str = field(default=None, metadata={'path_param': { 'field_name': 'data_request_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDataRequestTokenSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateDataRequestTokenRequest:
    path_params: CreateDataRequestTokenPathParams = field(default=None)
    security: CreateDataRequestTokenSecurity = field(default=None)
    
class CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseToken:
    data_request_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_request_url' }})
    expires_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_at' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    

@dataclass_json
@dataclass
class CreateDataRequestTokenCreateSubmissionDataRequestTokenResponse:
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    status: CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    token: CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseToken = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    

@dataclass
class CreateDataRequestTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    create_submission_data_request_token_response: Optional[CreateDataRequestTokenCreateSubmissionDataRequestTokenResponse] = field(default=None)
    
