from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import criteriatargeting
from . import criteriatargeting
from . import operatingsystemtargeting


@dataclass_json
@dataclass
class TechnologyTargeting:
    device_capability_targeting: Optional[criteriatargeting.CriteriaTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceCapabilityTargeting' }})
    device_category_targeting: Optional[criteriatargeting.CriteriaTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceCategoryTargeting' }})
    operating_system_targeting: Optional[operatingsystemtargeting.OperatingSystemTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatingSystemTargeting' }})
    
