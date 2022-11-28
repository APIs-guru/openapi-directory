from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ChecksSetSuitesPreferencesPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks:
    app_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('app_id') }})
    setting: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('setting') }})
    

@dataclass_json
@dataclass
class ChecksSetSuitesPreferencesRequestBody:
    auto_trigger_checks: Optional[List[ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_trigger_checks') }})
    

@dataclass
class ChecksSetSuitesPreferencesRequest:
    path_params: ChecksSetSuitesPreferencesPathParams = field()
    request: Optional[ChecksSetSuitesPreferencesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChecksSetSuitesPreferencesResponse:
    content_type: str = field()
    status_code: int = field()
    check_suite_preference: Optional[shared.CheckSuitePreference] = field(default=None)
    
