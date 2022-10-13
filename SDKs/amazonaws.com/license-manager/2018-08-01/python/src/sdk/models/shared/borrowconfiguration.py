from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BorrowConfiguration:
    allow_early_check_in: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowEarlyCheckIn' }})
    max_time_to_live_in_minutes: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxTimeToLiveInMinutes' }})
    
