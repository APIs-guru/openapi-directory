from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import compliancestatus_enum
from . import statusreason


@dataclass_json
@dataclass
class Compliance:
    related_requirements: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RelatedRequirements' }})
    status: Optional[compliancestatus_enum.ComplianceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_reasons: Optional[List[statusreason.StatusReason]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusReasons' }})
    
