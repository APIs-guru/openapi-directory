from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TechnologyTargeting:
    r"""TechnologyTargeting
    Represents targeting about various types of technology.
    """
    
    device_capability_targeting: Optional[CriteriaTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceCapabilityTargeting') }})
    device_category_targeting: Optional[CriteriaTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceCategoryTargeting') }})
    operating_system_targeting: Optional[OperatingSystemTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystemTargeting') }})
    
