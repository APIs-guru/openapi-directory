from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import targetingrulescope


@dataclass_json
@dataclass
class AcquisitionTargetingRule:
    scope: Optional[targetingrulescope.TargetingRuleScope] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    
