from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest:
    data: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    template_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_id') }})
    css: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('css') }})
    html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    test: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('test') }})
    

@dataclass_json
@dataclass
class BatchGeneratePdfsSubmissionBatchData:
    submissions: List[BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('submissions') }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_id') }})
    test: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('test') }})
    

@dataclass
class BatchGeneratePdfsSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
class BatchGeneratePdfsCreateSubmissionBatchResponseStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"

class BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatchStateEnum(str, Enum):
    PENDING = "pending"
    PROCESSED = "processed"
    ERROR = "error"


@dataclass_json
@dataclass
class BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch:
    completion_percentage: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('completion_percentage') }})
    error_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_count') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    metadata: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    pending_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pending_count') }})
    processed_at: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('processed_at') }})
    state: BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatchStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    total_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    submissions: Optional[List[shared.Submission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submissions') }})
    
class BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"
    VALID_BUT_NOT_SAVED = "valid_but_not_saved"


@dataclass_json
@dataclass
class BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponse:
    status: BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    submission: Optional[shared.Submission] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submission') }})
    

@dataclass_json
@dataclass
class BatchGeneratePdfsCreateSubmissionBatchResponse:
    status: BatchGeneratePdfsCreateSubmissionBatchResponseStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    submission_batch: BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('submission_batch') }})
    submissions: List[BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponse] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('submissions') }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class BatchGeneratePdfsRequest:
    request: BatchGeneratePdfsSubmissionBatchData = field(metadata={'request': { 'media_type': 'application/json' }})
    security: BatchGeneratePdfsSecurity = field()
    

@dataclass
class BatchGeneratePdfsResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    create_submission_batch_response: Optional[BatchGeneratePdfsCreateSubmissionBatchResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
