from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SecretScanningUpdateAlertPathParams:
    alert_number: int = field(default=None, metadata={'path_param': { 'field_name': 'alert_number', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SecretScanningUpdateAlertRequestBody:
    resolution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    state: shared.SecretScanningAlertStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

@dataclass
class SecretScanningUpdateAlertRequest:
    path_params: SecretScanningUpdateAlertPathParams = field(default=None)
    request: Optional[SecretScanningUpdateAlertRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class SecretScanningUpdateAlert503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class SecretScanningUpdateAlertResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    secret_scanning_alert: Optional[shared.SecretScanningAlert] = field(default=None)
    secret_scanning_update_alert_503_application_json_object: Optional[SecretScanningUpdateAlert503ApplicationJSON] = field(default=None)
    
