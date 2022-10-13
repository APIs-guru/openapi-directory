from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReviewResultDetail:
    action_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionId' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    question_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuestionId' }})
    subject_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubjectId' }})
    subject_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubjectType' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
