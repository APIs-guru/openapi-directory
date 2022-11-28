from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CodeScanningUpdateAlertPathParams:
    alert_number: int = field(metadata={'path_param': { 'field_name': 'alert_number', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CodeScanningUpdateAlertRequestBody:
    state: shared.CodeScanningAlertSetStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    dismissed_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismissed_reason') }})
    

@dataclass_json
@dataclass
class CodeScanningUpdateAlert503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class CodeScanningUpdateAlertRequest:
    path_params: CodeScanningUpdateAlertPathParams = field()
    request: Optional[CodeScanningUpdateAlertRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CodeScanningUpdateAlertResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    code_scanning_alert: Optional[shared.CodeScanningAlert] = field(default=None)
    code_scanning_update_alert_503_application_json_object: Optional[CodeScanningUpdateAlert503ApplicationJSON] = field(default=None)
    
