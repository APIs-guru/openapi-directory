from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import findingsfilteraction_enum
from . import findingcriteria


@dataclass_json
@dataclass
class GetFindingsFilterResponse:
    action: Optional[findingsfilteraction_enum.FindingsFilterActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    finding_criteria: Optional[findingcriteria.FindingCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingCriteria' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
