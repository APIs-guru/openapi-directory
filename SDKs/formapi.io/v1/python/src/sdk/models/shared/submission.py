from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    expired: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expired') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    state: SubmissionStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    test: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('test') }})
    actions: Optional[List[SubmissionAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    batch_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batch_id') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    data_requests: Optional[List[SubmissionDataRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_requests') }})
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_url') }})
    editable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editable') }})
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_at') }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    pdf_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pdf_hash') }})
    permanent_download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permanent_download_url') }})
    processed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processed_at') }})
    referrer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referrer') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_id') }})
    truncated_text: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('truncated_text') }})
    
