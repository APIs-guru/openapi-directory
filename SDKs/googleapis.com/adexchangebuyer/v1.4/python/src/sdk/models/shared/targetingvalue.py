from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import targetingvaluecreativesize
from . import targetingvaluedayparttargeting
from . import targetingvaluedemogagecriteria
from . import targetingvaluedemoggendercriteria
from . import targetingvaluerequestplatformtargeting


@dataclass_json
@dataclass
class TargetingValue:
    creative_size_value: Optional[targetingvaluecreativesize.TargetingValueCreativeSize] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeSizeValue' }})
    day_part_targeting_value: Optional[targetingvaluedayparttargeting.TargetingValueDayPartTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayPartTargetingValue' }})
    demog_age_criteria_value: Optional[targetingvaluedemogagecriteria.TargetingValueDemogAgeCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'demogAgeCriteriaValue' }})
    demog_gender_criteria_value: Optional[targetingvaluedemoggendercriteria.TargetingValueDemogGenderCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'demogGenderCriteriaValue' }})
    long_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longValue' }})
    request_platform_targeting_value: Optional[targetingvaluerequestplatformtargeting.TargetingValueRequestPlatformTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestPlatformTargetingValue' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    
