from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class CombineSubmissionsRequestBodyCombinedSubmissionData:
    expires_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_in' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    submission_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submission_ids' }})
    test: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'test' }})
    

@dataclass
class CombineSubmissionsSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CombineSubmissionsRequest:
    request: CombineSubmissionsRequestBodyCombinedSubmissionData = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CombineSubmissionsSecurity = field(default=None)
    
class CombineSubmissions201ApplicationJSONCombinedSubmissionSourcePdfs1TypeEnum(str, Enum):
    SUBMISSION = "submission"
    COMBINED_SUBMISSION = "combined_submission"
    TEMPLATE = "template"
    CUSTOM_FILE = "custom_file"


@dataclass_json
@dataclass
class CombineSubmissions201ApplicationJSONCombinedSubmissionSourcePdfs1:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: CombineSubmissions201ApplicationJSONCombinedSubmissionSourcePdfs1TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class CombineSubmissions201ApplicationJSONCombinedSubmissionSourcePdfs2TypeEnum(str, Enum):
    URL = "url"


@dataclass_json
@dataclass
class CombineSubmissions201ApplicationJSONCombinedSubmissionSourcePdfs2:
    type: CombineSubmissions201ApplicationJSONCombinedSubmissionSourcePdfs2TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
class CombineSubmissions201ApplicationJSONCombinedSubmissionStateEnum(str, Enum):
    PENDING = "pending"
    PROCESSED = "processed"
    ERROR = "error"


@dataclass_json
@dataclass
class CombineSubmissions201ApplicationJSONCombinedSubmissionCombinedSubmission:
    actions: Optional[List[shared.CombinedSubmissionAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_url' }})
    expired: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expired' }})
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_at' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    pdf_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pdf_hash' }})
    source_pdfs: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_pdfs' }})
    state: CombineSubmissions201ApplicationJSONCombinedSubmissionStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    submission_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submission_ids' }})
    
class CombineSubmissions201ApplicationJSONStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CombineSubmissions201ApplicationJSONCreateCombinedSubmissionResponse:
    combined_submission: CombineSubmissions201ApplicationJSONCombinedSubmissionCombinedSubmission = field(default=None, metadata={'dataclasses_json': { 'field_name': 'combined_submission' }})
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    status: CombineSubmissions201ApplicationJSONStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class CombineSubmissionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    create_combined_submission_response: Optional[CombineSubmissions201ApplicationJSONCreateCombinedSubmissionResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    invalid_request: Optional[shared.InvalidRequest] = field(default=None)
    
