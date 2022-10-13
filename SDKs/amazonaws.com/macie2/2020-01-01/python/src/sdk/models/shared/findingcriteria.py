from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import criterionadditionalproperties


@dataclass_json
@dataclass
class FindingCriteria:
    criterion: Optional[dict[str, criterionadditionalproperties.CriterionAdditionalProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'criterion' }})
    
