from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import constraintsummary
from . import tag


@dataclass_json
@dataclass
class LaunchPathSummary:
    constraint_summaries: Optional[List[constraintsummary.ConstraintSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConstraintSummaries' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
