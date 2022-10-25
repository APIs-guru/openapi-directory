from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest:
    css: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'css' }})
    data: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    template_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template_id' }})
    test: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'test' }})
    

@dataclass_json
@dataclass
class BatchGeneratePdfsSubmissionBatchData:
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    submissions: List[BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submissions' }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template_id' }})
    test: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'test' }})
    

@dataclass
class BatchGeneratePdfsSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class BatchGeneratePdfsRequest:
    request: BatchGeneratePdfsSubmissionBatchData = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: BatchGeneratePdfsSecurity = field(default=None)
    
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
    completion_percentage: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completion_percentage' }})
    error_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_count' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    metadata: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    pending_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pending_count' }})
    processed_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processed_at' }})
    state: BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatchStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    submissions: Optional[List[shared.Submission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submissions' }})
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    
class BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"
    VALID_BUT_NOT_SAVED = "valid_but_not_saved"


@dataclass_json
@dataclass
class BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponse:
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    status: BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    submission: Optional[shared.Submission] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submission' }})
    

@dataclass_json
@dataclass
class BatchGeneratePdfsCreateSubmissionBatchResponse:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    status: BatchGeneratePdfsCreateSubmissionBatchResponseStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    submission_batch: BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submission_batch' }})
    submissions: List[BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submissions' }})
    

@dataclass
class BatchGeneratePdfsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    create_submission_batch_response: Optional[BatchGeneratePdfsCreateSubmissionBatchResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
