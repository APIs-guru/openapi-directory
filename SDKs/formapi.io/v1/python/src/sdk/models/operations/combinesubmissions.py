from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class CombineSubmissionsCombinedSubmissionData:
    submission_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('submission_ids') }})
    expires_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_in') }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    test: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('test') }})
    

@dataclass
class CombineSubmissionsSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
class CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum(str, Enum):
    SUBMISSION = "submission"
    COMBINED_SUBMISSION = "combined_submission"
    TEMPLATE = "template"
    CUSTOM_FILE = "custom_file"


@dataclass_json
@dataclass
class CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum(str, Enum):
    URL = "url"


@dataclass_json
@dataclass
class CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2:
    type: CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
class CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum(str, Enum):
    PENDING = "pending"
    PROCESSED = "processed"
    ERROR = "error"


@dataclass_json
@dataclass
class CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission:
    expired: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expired') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    source_pdfs: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_pdfs') }})
    state: CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    submission_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('submission_ids') }})
    actions: Optional[List[shared.CombinedSubmissionAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_url') }})
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_at') }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    pdf_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pdf_hash') }})
    
class CombineSubmissionsCreateCombinedSubmissionResponseStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CombineSubmissionsCreateCombinedSubmissionResponse:
    combined_submission: CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('combined_submission') }})
    status: CombineSubmissionsCreateCombinedSubmissionResponseStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CombineSubmissionsRequest:
    request: CombineSubmissionsCombinedSubmissionData = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CombineSubmissionsSecurity = field()
    

@dataclass
class CombineSubmissionsResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    create_combined_submission_response: Optional[CombineSubmissionsCreateCombinedSubmissionResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    invalid_request: Optional[shared.InvalidRequest] = field(default=None)
    
