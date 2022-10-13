from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CodeScanningUpdateAlertPathParams:
    alert_number: int = field(default=None, metadata={'path_param': { 'field_name': 'alert_number', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CodeScanningUpdateAlertRequestBody:
    dismissed_reason: Optional[shared.CodeScanningAlertDismissedReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dismissed_reason' }})
    state: shared.CodeScanningAlertSetStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

@dataclass
class CodeScanningUpdateAlertRequest:
    path_params: CodeScanningUpdateAlertPathParams = field(default=None)
    request: Optional[CodeScanningUpdateAlertRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CodeScanningUpdateAlert503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class CodeScanningUpdateAlertResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    code_scanning_alert: Optional[shared.CodeScanningAlert] = field(default=None)
    code_scanning_update_alert_503_application_json_object: Optional[CodeScanningUpdateAlert503ApplicationJSON] = field(default=None)
    
