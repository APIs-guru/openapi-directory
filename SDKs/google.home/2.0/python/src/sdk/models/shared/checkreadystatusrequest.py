from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CheckReadyStatusRequest:
    play_ready_message: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('play_ready_message') }})
    user_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    
