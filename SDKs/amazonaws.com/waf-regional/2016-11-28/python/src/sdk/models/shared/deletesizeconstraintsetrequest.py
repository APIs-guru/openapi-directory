from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteSizeConstraintSetRequest:
    change_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    size_constraint_set_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizeConstraintSetId') }})
    
