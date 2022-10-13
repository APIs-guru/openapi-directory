from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CodeScanningUploadSarifPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CodeScanningUploadSarifRequestBody:
    checkout_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkout_uri' }})
    commit_sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit_sha' }})
    ref: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ref' }})
    sarif: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sarif' }})
    started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tool_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tool_name' }})
    

@dataclass
class CodeScanningUploadSarifRequest:
    path_params: CodeScanningUploadSarifPathParams = field(default=None)
    request: Optional[CodeScanningUploadSarifRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CodeScanningUploadSarif503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class CodeScanningUploadSarifResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    code_scanning_sarifs_receipt: Optional[shared.CodeScanningSarifsReceipt] = field(default=None)
    code_scanning_upload_sarif_503_application_json_object: Optional[CodeScanningUploadSarif503ApplicationJSON] = field(default=None)
    
