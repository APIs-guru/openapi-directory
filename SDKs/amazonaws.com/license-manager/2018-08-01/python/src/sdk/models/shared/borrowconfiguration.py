from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BorrowConfiguration:
    r"""BorrowConfiguration
    Details about a borrow configuration.
    """
    
    allow_early_check_in: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowEarlyCheckIn') }})
    max_time_to_live_in_minutes: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxTimeToLiveInMinutes') }})
    
