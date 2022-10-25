from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetSubmissionBatchPathParams:
    submission_batch_id: str = field(default=None, metadata={'path_param': { 'field_name': 'submission_batch_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubmissionBatchQueryParams:
    include_submissions: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_submissions', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubmissionBatchSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetSubmissionBatchRequest:
    path_params: GetSubmissionBatchPathParams = field(default=None)
    query_params: GetSubmissionBatchQueryParams = field(default=None)
    security: GetSubmissionBatchSecurity = field(default=None)
    
class GetSubmissionBatchSubmissionBatchStateEnum(str, Enum):
    PENDING = "pending"
    PROCESSED = "processed"
    ERROR = "error"


@dataclass_json
@dataclass
class GetSubmissionBatchSubmissionBatch:
    completion_percentage: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completion_percentage' }})
    error_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_count' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    metadata: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    pending_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pending_count' }})
    processed_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processed_at' }})
    state: GetSubmissionBatchSubmissionBatchStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    submissions: Optional[List[shared.Submission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submissions' }})
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass
class GetSubmissionBatchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    submission_batch: Optional[GetSubmissionBatchSubmissionBatch] = field(default=None)
    
