from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import acquisitiontargetingrule
from . import upgradetargetingrule


@dataclass_json
@dataclass
class SubscriptionOfferTargeting:
    acquisition_rule: Optional[acquisitiontargetingrule.AcquisitionTargetingRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acquisitionRule' }})
    upgrade_rule: Optional[upgradetargetingrule.UpgradeTargetingRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upgradeRule' }})
    
