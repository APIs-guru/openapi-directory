from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoalAddSupportingWorkRequest:
    supporting_work: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('supporting_work') }})
    
