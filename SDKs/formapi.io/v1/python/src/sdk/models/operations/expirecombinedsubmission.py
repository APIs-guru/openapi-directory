from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ExpireCombinedSubmissionPathParams:
    combined_submission_id: str = field(metadata={'path_param': { 'field_name': 'combined_submission_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExpireCombinedSubmissionSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
class ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum(str, Enum):
    SUBMISSION = "submission"
    COMBINED_SUBMISSION = "combined_submission"
    TEMPLATE = "template"
    CUSTOM_FILE = "custom_file"


@dataclass_json
@dataclass
class ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum(str, Enum):
    URL = "url"


@dataclass_json
@dataclass
class ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2:
    type: ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
class ExpireCombinedSubmissionCombinedSubmissionStateEnum(str, Enum):
    PENDING = "pending"
    PROCESSED = "processed"
    ERROR = "error"


@dataclass_json
@dataclass
class ExpireCombinedSubmissionCombinedSubmission:
    expired: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expired') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    source_pdfs: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_pdfs') }})
    state: ExpireCombinedSubmissionCombinedSubmissionStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    submission_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('submission_ids') }})
    actions: Optional[List[shared.CombinedSubmissionAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_url') }})
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_at') }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    pdf_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pdf_hash') }})
    

@dataclass
class ExpireCombinedSubmissionRequest:
    path_params: ExpireCombinedSubmissionPathParams = field()
    security: ExpireCombinedSubmissionSecurity = field()
    

@dataclass
class ExpireCombinedSubmissionResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    combined_submission: Optional[ExpireCombinedSubmissionCombinedSubmission] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
