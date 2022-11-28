from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetSubmissionBatchPathParams:
    submission_batch_id: str = field(metadata={'path_param': { 'field_name': 'submission_batch_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubmissionBatchQueryParams:
    include_submissions: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_submissions', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubmissionBatchSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
class GetSubmissionBatchSubmissionBatchStateEnum(str, Enum):
    PENDING = "pending"
    PROCESSED = "processed"
    ERROR = "error"


@dataclass_json
@dataclass
class GetSubmissionBatchSubmissionBatch:
    completion_percentage: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('completion_percentage') }})
    error_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_count') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    metadata: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    pending_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pending_count') }})
    processed_at: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('processed_at') }})
    state: GetSubmissionBatchSubmissionBatchStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    total_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    submissions: Optional[List[shared.Submission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submissions') }})
    

@dataclass
class GetSubmissionBatchRequest:
    path_params: GetSubmissionBatchPathParams = field()
    query_params: GetSubmissionBatchQueryParams = field()
    security: GetSubmissionBatchSecurity = field()
    

@dataclass
class GetSubmissionBatchResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    submission_batch: Optional[GetSubmissionBatchSubmissionBatch] = field(default=None)
    
