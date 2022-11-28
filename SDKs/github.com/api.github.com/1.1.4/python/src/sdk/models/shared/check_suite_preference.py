from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CheckSuitePreferencePreferencesAutoTriggerChecks:
    app_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('app_id') }})
    setting: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('setting') }})
    

@dataclass_json
@dataclass
class CheckSuitePreferencePreferences:
    auto_trigger_checks: Optional[List[CheckSuitePreferencePreferencesAutoTriggerChecks]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_trigger_checks') }})
    

@dataclass_json
@dataclass
class CheckSuitePreference:
    r"""CheckSuitePreference
    Check suite configuration preferences for a repository.
    """
    
    preferences: CheckSuitePreferencePreferences = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferences') }})
    repository: Repository = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    
