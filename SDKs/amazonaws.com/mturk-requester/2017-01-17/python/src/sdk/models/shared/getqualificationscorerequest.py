from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetQualificationScoreRequest:
    qualification_type_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualificationTypeId') }})
    worker_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkerId') }})
    
