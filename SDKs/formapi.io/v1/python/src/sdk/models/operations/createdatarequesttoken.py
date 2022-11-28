from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateDataRequestTokenPathParams:
    data_request_id: str = field(metadata={'path_param': { 'field_name': 'data_request_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDataRequestTokenSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
class CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseToken:
    data_request_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_request_url') }})
    expires_at: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_at') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    

@dataclass_json
@dataclass
class CreateDataRequestTokenCreateSubmissionDataRequestTokenResponse:
    status: CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    token: CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseToken = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateDataRequestTokenRequest:
    path_params: CreateDataRequestTokenPathParams = field()
    security: CreateDataRequestTokenSecurity = field()
    

@dataclass
class CreateDataRequestTokenResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    create_submission_data_request_token_response: Optional[CreateDataRequestTokenCreateSubmissionDataRequestTokenResponse] = field(default=None)
    
