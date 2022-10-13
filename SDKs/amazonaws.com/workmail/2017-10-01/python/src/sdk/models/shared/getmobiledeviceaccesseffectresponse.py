from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import mobiledeviceaccessruleeffect_enum
from . import mobiledeviceaccessmatchedrule


@dataclass_json
@dataclass
class GetMobileDeviceAccessEffectResponse:
    effect: Optional[mobiledeviceaccessruleeffect_enum.MobileDeviceAccessRuleEffectEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Effect' }})
    matched_rules: Optional[List[mobiledeviceaccessmatchedrule.MobileDeviceAccessMatchedRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MatchedRules' }})
    
