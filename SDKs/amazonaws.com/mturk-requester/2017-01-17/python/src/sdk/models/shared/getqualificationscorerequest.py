from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetQualificationScoreRequest:
    qualification_type_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QualificationTypeId' }})
    worker_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkerId' }})
    
