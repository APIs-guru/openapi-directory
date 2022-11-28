from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NotificationChannelActivationRequest:
    r"""NotificationChannelActivationRequest
    Request model for switching notification channel status
    """
    
    channel_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    is_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEnabled') }})
    
