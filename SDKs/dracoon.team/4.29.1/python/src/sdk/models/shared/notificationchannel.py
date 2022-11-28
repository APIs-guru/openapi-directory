from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NotificationChannel:
    r"""NotificationChannel
    Notification channel information
    """
    
    frequency: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEnabled') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
