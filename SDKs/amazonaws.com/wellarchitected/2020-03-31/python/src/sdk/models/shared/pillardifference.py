from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import differencestatus_enum
from . import questiondifference


@dataclass_json
@dataclass
class PillarDifference:
    difference_status: Optional[differencestatus_enum.DifferenceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DifferenceStatus' }})
    pillar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PillarId' }})
    question_differences: Optional[List[questiondifference.QuestionDifference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuestionDifferences' }})
    
