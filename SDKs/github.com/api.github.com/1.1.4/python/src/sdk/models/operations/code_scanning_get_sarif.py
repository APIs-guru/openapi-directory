from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CodeScanningGetSarifPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    sarif_id: str = field(metadata={'path_param': { 'field_name': 'sarif_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CodeScanningGetSarif503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class CodeScanningGetSarifRequest:
    path_params: CodeScanningGetSarifPathParams = field()
    

@dataclass
class CodeScanningGetSarifResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    code_scanning_sarifs_status: Optional[shared.CodeScanningSarifsStatus] = field(default=None)
    code_scanning_get_sarif_503_application_json_object: Optional[CodeScanningGetSarif503ApplicationJSON] = field(default=None)
    
