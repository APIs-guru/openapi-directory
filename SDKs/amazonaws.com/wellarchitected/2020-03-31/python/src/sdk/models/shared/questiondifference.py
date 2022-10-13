from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import differencestatus_enum


@dataclass_json
@dataclass
class QuestionDifference:
    difference_status: Optional[differencestatus_enum.DifferenceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DifferenceStatus' }})
    question_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuestionId' }})
    question_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuestionTitle' }})
    
