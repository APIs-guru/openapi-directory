from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class BatchGeneratePdfV1PathParams:
    template_id: str = field(default=None, metadata={'path_param': { 'field_name': 'template_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatchGeneratePdfV1Security:
    api_token_basic: shared.SchemeAPITokenBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class BatchGeneratePdfV1Request:
    path_params: BatchGeneratePdfV1PathParams = field(default=None)
    request: List[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: BatchGeneratePdfV1Security = field(default=None)
    
class BatchGeneratePdfV1CreateSubmissionResponseStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class BatchGeneratePdfV1CreateSubmissionResponse:
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    status: BatchGeneratePdfV1CreateSubmissionResponseStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    submission: shared.Submission = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submission' }})
    

@dataclass
class BatchGeneratePdfV1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    create_submission_responses: Optional[List[BatchGeneratePdfV1CreateSubmissionResponse]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    invalid_requests: Optional[List[shared.InvalidRequest]] = field(default=None)
    
