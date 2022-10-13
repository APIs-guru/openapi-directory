from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class CombinePdfsRequestBodySourcePdfs1TypeEnum(str, Enum):
    SUBMISSION = "submission"
    COMBINED_SUBMISSION = "combined_submission"
    TEMPLATE = "template"
    CUSTOM_FILE = "custom_file"


@dataclass_json
@dataclass
class CombinePdfsRequestBodySourcePdfs1:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: CombinePdfsRequestBodySourcePdfs1TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class CombinePdfsRequestBodySourcePdfs2TypeEnum(str, Enum):
    URL = "url"


@dataclass_json
@dataclass
class CombinePdfsRequestBodySourcePdfs2:
    type: CombinePdfsRequestBodySourcePdfs2TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class CombinePdfsRequestBodyCombinePdfsData:
    delete_custom_files: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delete_custom_files' }})
    expires_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_in' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    source_pdfs: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_pdfs' }})
    test: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'test' }})
    

@dataclass
class CombinePdfsSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CombinePdfsRequest:
    request: CombinePdfsRequestBodyCombinePdfsData = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CombinePdfsSecurity = field(default=None)
    
class CombinePdfs201ApplicationJSONCombinedSubmissionSourcePdfs1TypeEnum(str, Enum):
    SUBMISSION = "submission"
    COMBINED_SUBMISSION = "combined_submission"
    TEMPLATE = "template"
    CUSTOM_FILE = "custom_file"


@dataclass_json
@dataclass
class CombinePdfs201ApplicationJSONCombinedSubmissionSourcePdfs1:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: CombinePdfs201ApplicationJSONCombinedSubmissionSourcePdfs1TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class CombinePdfs201ApplicationJSONCombinedSubmissionSourcePdfs2TypeEnum(str, Enum):
    URL = "url"


@dataclass_json
@dataclass
class CombinePdfs201ApplicationJSONCombinedSubmissionSourcePdfs2:
    type: CombinePdfs201ApplicationJSONCombinedSubmissionSourcePdfs2TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
class CombinePdfs201ApplicationJSONCombinedSubmissionStateEnum(str, Enum):
    PENDING = "pending"
    PROCESSED = "processed"
    ERROR = "error"


@dataclass_json
@dataclass
class CombinePdfs201ApplicationJSONCombinedSubmissionCombinedSubmission:
    actions: Optional[List[shared.CombinedSubmissionAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_url' }})
    expired: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expired' }})
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_at' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    pdf_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pdf_hash' }})
    source_pdfs: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_pdfs' }})
    state: CombinePdfs201ApplicationJSONCombinedSubmissionStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    submission_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submission_ids' }})
    
class CombinePdfs201ApplicationJSONStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CombinePdfs201ApplicationJSONCreateCombinedSubmissionResponse:
    combined_submission: CombinePdfs201ApplicationJSONCombinedSubmissionCombinedSubmission = field(default=None, metadata={'dataclasses_json': { 'field_name': 'combined_submission' }})
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    status: CombinePdfs201ApplicationJSONStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class CombinePdfsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    create_combined_submission_response: Optional[CombinePdfs201ApplicationJSONCreateCombinedSubmissionResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    invalid_request: Optional[shared.InvalidRequest] = field(default=None)
    
