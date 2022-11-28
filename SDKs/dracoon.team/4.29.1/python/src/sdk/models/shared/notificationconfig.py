from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NotificationConfig:
    r"""NotificationConfig
    Notification configuration information
    """
    
    channel_ids: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelIds') }})
    event_type_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTypeName') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    scope_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopeId') }})
    
