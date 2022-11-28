from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OperatingSystemTargeting:
    r"""OperatingSystemTargeting
    Represents targeting information for operating systems.
    """
    
    operating_system_criteria: Optional[CriteriaTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystemCriteria') }})
    operating_system_version_criteria: Optional[CriteriaTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystemVersionCriteria') }})
    
