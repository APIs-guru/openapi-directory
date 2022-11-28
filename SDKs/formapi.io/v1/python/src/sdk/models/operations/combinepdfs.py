from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class CombinePdfsCombinePdfsDataSourcePdfs1TypeEnum(str, Enum):
    SUBMISSION = "submission"
    COMBINED_SUBMISSION = "combined_submission"
    TEMPLATE = "template"
    CUSTOM_FILE = "custom_file"


@dataclass_json
@dataclass
class CombinePdfsCombinePdfsDataSourcePdfs1:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: CombinePdfsCombinePdfsDataSourcePdfs1TypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class CombinePdfsCombinePdfsDataSourcePdfs2TypeEnum(str, Enum):
    URL = "url"


@dataclass_json
@dataclass
class CombinePdfsCombinePdfsDataSourcePdfs2:
    type: CombinePdfsCombinePdfsDataSourcePdfs2TypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class CombinePdfsCombinePdfsData:
    source_pdfs: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_pdfs') }})
    delete_custom_files: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete_custom_files') }})
    expires_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_in') }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    test: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('test') }})
    

@dataclass
class CombinePdfsSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
class CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum(str, Enum):
    SUBMISSION = "submission"
    COMBINED_SUBMISSION = "combined_submission"
    TEMPLATE = "template"
    CUSTOM_FILE = "custom_file"


@dataclass_json
@dataclass
class CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum(str, Enum):
    URL = "url"


@dataclass_json
@dataclass
class CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2:
    type: CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
class CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum(str, Enum):
    PENDING = "pending"
    PROCESSED = "processed"
    ERROR = "error"


@dataclass_json
@dataclass
class CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission:
    expired: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expired') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    source_pdfs: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_pdfs') }})
    state: CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    submission_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('submission_ids') }})
    actions: Optional[List[shared.CombinedSubmissionAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_url') }})
    expires_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_at') }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    pdf_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pdf_hash') }})
    
class CombinePdfsCreateCombinedSubmissionResponseStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CombinePdfsCreateCombinedSubmissionResponse:
    combined_submission: CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('combined_submission') }})
    status: CombinePdfsCreateCombinedSubmissionResponseStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CombinePdfsRequest:
    request: CombinePdfsCombinePdfsData = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CombinePdfsSecurity = field()
    

@dataclass
class CombinePdfsResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    create_combined_submission_response: Optional[CombinePdfsCreateCombinedSubmissionResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    invalid_request: Optional[shared.InvalidRequest] = field(default=None)
    
