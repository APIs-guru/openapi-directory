from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class CombineSubmissionsCombinedSubmissionData:
    expires_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_in' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    submission_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submission_ids' }})
    test: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'test' }})
    

@dataclass
class CombineSubmissionsSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CombineSubmissionsRequest:
    request: CombineSubmissionsCombinedSubmissionData = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CombineSubmissionsSecurity = field(default=None)
    
class CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum(str, Enum):
    SUBMISSION = "submission"
    COMBINED_SUBMISSION = "combined_submission"
    TEMPLATE = "template"
    CUSTOM_FILE = "custom_file"


@dataclass_json
@dataclass
class CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum(str, Enum):
    URL = "url"


@dataclass_json
@dataclass
class CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2:
    type: CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
class CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum(str, Enum):
    PENDING = "pending"
    PROCESSED = "processed"
    ERROR = "error"


@dataclass_json
@dataclass
class CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission:
    actions: Optional[List[shared.CombinedSubmissionAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_url' }})
    expired: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expired' }})
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_at' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    pdf_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pdf_hash' }})
    source_pdfs: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_pdfs' }})
    state: CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    submission_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submission_ids' }})
    
class CombineSubmissionsCreateCombinedSubmissionResponseStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CombineSubmissionsCreateCombinedSubmissionResponse:
    combined_submission: CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission = field(default=None, metadata={'dataclasses_json': { 'field_name': 'combined_submission' }})
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    status: CombineSubmissionsCreateCombinedSubmissionResponseStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class CombineSubmissionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    create_combined_submission_response: Optional[CombineSubmissionsCreateCombinedSubmissionResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    invalid_request: Optional[shared.InvalidRequest] = field(default=None)
    
