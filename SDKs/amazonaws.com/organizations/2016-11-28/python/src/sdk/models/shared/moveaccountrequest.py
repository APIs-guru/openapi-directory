from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MoveAccountRequest:
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    destination_parent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationParentId') }})
    source_parent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceParentId') }})
    
