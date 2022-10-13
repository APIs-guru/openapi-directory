from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ExpireCombinedSubmissionPathParams:
    combined_submission_id: str = field(default=None, metadata={'path_param': { 'field_name': 'combined_submission_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExpireCombinedSubmissionSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ExpireCombinedSubmissionRequest:
    path_params: ExpireCombinedSubmissionPathParams = field(default=None)
    security: ExpireCombinedSubmissionSecurity = field(default=None)
    
class ExpireCombinedSubmission200ApplicationJSONSourcePdfs1TypeEnum(str, Enum):
    SUBMISSION = "submission"
    COMBINED_SUBMISSION = "combined_submission"
    TEMPLATE = "template"
    CUSTOM_FILE = "custom_file"


@dataclass_json
@dataclass
class ExpireCombinedSubmission200ApplicationJSONSourcePdfs1:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: ExpireCombinedSubmission200ApplicationJSONSourcePdfs1TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class ExpireCombinedSubmission200ApplicationJSONSourcePdfs2TypeEnum(str, Enum):
    URL = "url"


@dataclass_json
@dataclass
class ExpireCombinedSubmission200ApplicationJSONSourcePdfs2:
    type: ExpireCombinedSubmission200ApplicationJSONSourcePdfs2TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
class ExpireCombinedSubmission200ApplicationJSONStateEnum(str, Enum):
    PENDING = "pending"
    PROCESSED = "processed"
    ERROR = "error"


@dataclass_json
@dataclass
class ExpireCombinedSubmission200ApplicationJSONCombinedSubmission:
    actions: Optional[List[shared.CombinedSubmissionAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_url' }})
    expired: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expired' }})
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_at' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    pdf_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pdf_hash' }})
    source_pdfs: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_pdfs' }})
    state: ExpireCombinedSubmission200ApplicationJSONStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    submission_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submission_ids' }})
    

@dataclass
class ExpireCombinedSubmissionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    combined_submission: Optional[ExpireCombinedSubmission200ApplicationJSONCombinedSubmission] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
