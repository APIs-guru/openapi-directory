from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetCombinedSubmissionPathParams:
    combined_submission_id: str = field(default=None, metadata={'path_param': { 'field_name': 'combined_submission_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCombinedSubmissionSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetCombinedSubmissionRequest:
    path_params: GetCombinedSubmissionPathParams = field(default=None)
    security: GetCombinedSubmissionSecurity = field(default=None)
    
class GetCombinedSubmission200ApplicationJSONSourcePdfs1TypeEnum(str, Enum):
    SUBMISSION = "submission"
    COMBINED_SUBMISSION = "combined_submission"
    TEMPLATE = "template"
    CUSTOM_FILE = "custom_file"


@dataclass_json
@dataclass
class GetCombinedSubmission200ApplicationJSONSourcePdfs1:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: GetCombinedSubmission200ApplicationJSONSourcePdfs1TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class GetCombinedSubmission200ApplicationJSONSourcePdfs2TypeEnum(str, Enum):
    URL = "url"


@dataclass_json
@dataclass
class GetCombinedSubmission200ApplicationJSONSourcePdfs2:
    type: GetCombinedSubmission200ApplicationJSONSourcePdfs2TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
class GetCombinedSubmission200ApplicationJSONStateEnum(str, Enum):
    PENDING = "pending"
    PROCESSED = "processed"
    ERROR = "error"


@dataclass_json
@dataclass
class GetCombinedSubmission200ApplicationJSONCombinedSubmission:
    actions: Optional[List[shared.CombinedSubmissionAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_url' }})
    expired: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expired' }})
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_at' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    pdf_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pdf_hash' }})
    source_pdfs: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_pdfs' }})
    state: GetCombinedSubmission200ApplicationJSONStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    submission_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submission_ids' }})
    

@dataclass
class GetCombinedSubmissionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    combined_submission: Optional[GetCombinedSubmission200ApplicationJSONCombinedSubmission] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
