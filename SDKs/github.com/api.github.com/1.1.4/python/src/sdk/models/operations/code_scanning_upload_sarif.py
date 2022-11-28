from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CodeScanningUploadSarifPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CodeScanningUploadSarifRequestBody:
    commit_sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_sha') }})
    ref: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    sarif: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sarif') }})
    checkout_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkout_uri') }})
    started_at: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('started_at'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tool_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tool_name') }})
    

@dataclass_json
@dataclass
class CodeScanningUploadSarif503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class CodeScanningUploadSarifRequest:
    path_params: CodeScanningUploadSarifPathParams = field()
    request: Optional[CodeScanningUploadSarifRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CodeScanningUploadSarifResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    code_scanning_sarifs_receipt: Optional[shared.CodeScanningSarifsReceipt] = field(default=None)
    code_scanning_upload_sarif_503_application_json_object: Optional[CodeScanningUploadSarif503ApplicationJSON] = field(default=None)
    
