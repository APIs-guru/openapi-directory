from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import api2_models_accounting
from . import api2_models_personal
from . import api2_models_preference
from . import api2_models_profile


@dataclass_json
@dataclass
class Api2ModelsBigOvenUser:
    accounting: Optional[api2_models_accounting.Api2ModelsAccounting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Accounting' }, 'form': { 'field_name': 'Accounting' }})
    bo_auth_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BOAuthToken' }, 'form': { 'field_name': 'BOAuthToken' }})
    last_change_log_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastChangeLogID' }, 'form': { 'field_name': 'LastChangeLogID' }})
    personal: Optional[api2_models_personal.Api2ModelsPersonal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Personal' }, 'form': { 'field_name': 'Personal' }})
    preferences: Optional[api2_models_preference.Api2ModelsPreference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Preferences' }, 'form': { 'field_name': 'Preferences' }})
    profile: Optional[api2_models_profile.Api2ModelsProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Profile' }, 'form': { 'field_name': 'Profile' }})
    
