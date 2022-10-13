from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import criteriatargeting
from . import criteriatargeting


@dataclass_json
@dataclass
class OperatingSystemTargeting:
    operating_system_criteria: Optional[criteriatargeting.CriteriaTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatingSystemCriteria' }})
    operating_system_version_criteria: Optional[criteriatargeting.CriteriaTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatingSystemVersionCriteria' }})
    
