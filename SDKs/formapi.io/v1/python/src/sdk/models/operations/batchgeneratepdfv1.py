from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class BatchGeneratePdfV1PathParams:
    template_id: str = field(metadata={'path_param': { 'field_name': 'template_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatchGeneratePdfV1Security:
    api_token_basic: shared.SchemeAPITokenBasic = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
class BatchGeneratePdfV1CreateSubmissionResponseStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class BatchGeneratePdfV1CreateSubmissionResponse:
    status: BatchGeneratePdfV1CreateSubmissionResponseStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    submission: shared.Submission = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('submission') }})
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class BatchGeneratePdfV1Request:
    path_params: BatchGeneratePdfV1PathParams = field()
    request: List[dict[str, Any]] = field(metadata={'request': { 'media_type': 'application/json' }})
    security: BatchGeneratePdfV1Security = field()
    

@dataclass
class BatchGeneratePdfV1Response:
    content_type: str = field()
    status_code: int = field()
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    create_submission_responses: Optional[List[BatchGeneratePdfV1CreateSubmissionResponse]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    invalid_requests: Optional[List[shared.InvalidRequest]] = field(default=None)
    
