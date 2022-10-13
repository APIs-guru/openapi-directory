from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import accesscontrolruleeffect_enum


@dataclass_json
@dataclass
class GetAccessControlEffectResponse:
    effect: Optional[accesscontrolruleeffect_enum.AccessControlRuleEffectEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Effect' }})
    matched_rules: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MatchedRules' }})
    
