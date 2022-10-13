from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import submission_action
from . import submission_data_request

class SubmissionStateEnum(str, Enum):
    PENDING = "pending"
    PROCESSED = "processed"
    INVALID_DATA = "invalid_data"
    ERROR = "error"
    IMAGE_DOWNLOAD_FAILED = "image_download_failed"
    IMAGE_PROCESSING_FAILED = "image_processing_failed"
    WAITING_FOR_DATA_REQUESTS = "waiting_for_data_requests"
    SYNTAX_ERROR = "syntax_error"
    ACCOUNT_SUSPENDED = "account_suspended"
    LICENSE_REVOKED = "license_revoked"
    ACCIDENTAL = "accidental"


@dataclass_json
@dataclass
class Submission:
    actions: Optional[List[submission_action.SubmissionAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    batch_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batch_id' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    data_requests: Optional[List[submission_data_request.SubmissionDataRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_requests' }})
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_url' }})
    editable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'editable' }})
    expired: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expired' }})
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_at' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    pdf_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pdf_hash' }})
    permanent_download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permanent_download_url' }})
    processed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processed_at' }})
    referrer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referrer' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    state: SubmissionStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template_id' }})
    test: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'test' }})
    truncated_text: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'truncated_text' }})
    
