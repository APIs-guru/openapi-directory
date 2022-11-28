from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class SecretScanningGetAlertPathParams:
    alert_number: int = field(metadata={'path_param': { 'field_name': 'alert_number', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SecretScanningGetAlert503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class SecretScanningGetAlertRequest:
    path_params: SecretScanningGetAlertPathParams = field()
    

@dataclass
class SecretScanningGetAlertResponse:
    content_type: str = field()
    status_code: int = field()
    secret_scanning_alert: Optional[shared.SecretScanningAlert] = field(default=None)
    secret_scanning_get_alert_503_application_json_object: Optional[SecretScanningGetAlert503ApplicationJSON] = field(default=None)
    
