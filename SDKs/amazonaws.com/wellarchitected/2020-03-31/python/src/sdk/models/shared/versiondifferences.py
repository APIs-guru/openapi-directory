from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pillardifference


@dataclass_json
@dataclass
class VersionDifferences:
    pillar_differences: Optional[List[pillardifference.PillarDifference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PillarDifferences' }})
    
