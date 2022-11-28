from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TargetingValue:
    creative_size_value: Optional[TargetingValueCreativeSize] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeSizeValue') }})
    day_part_targeting_value: Optional[TargetingValueDayPartTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayPartTargetingValue') }})
    demog_age_criteria_value: Optional[TargetingValueDemogAgeCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('demogAgeCriteriaValue') }})
    demog_gender_criteria_value: Optional[TargetingValueDemogGenderCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('demogGenderCriteriaValue') }})
    long_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longValue') }})
    request_platform_targeting_value: Optional[TargetingValueRequestPlatformTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestPlatformTargetingValue') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    
