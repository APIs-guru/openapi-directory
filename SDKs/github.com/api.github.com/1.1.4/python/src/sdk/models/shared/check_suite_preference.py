from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import repository


@dataclass_json
@dataclass
class CheckSuitePreferencePreferencesAutoTriggerChecks:
    app_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app_id' }})
    setting: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setting' }})
    

@dataclass_json
@dataclass
class CheckSuitePreferencePreferences:
    auto_trigger_checks: Optional[List[CheckSuitePreferencePreferencesAutoTriggerChecks]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_trigger_checks' }})
    

@dataclass_json
@dataclass
class CheckSuitePreference:
    preferences: CheckSuitePreferencePreferences = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferences' }})
    repository: repository.Repository = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    
