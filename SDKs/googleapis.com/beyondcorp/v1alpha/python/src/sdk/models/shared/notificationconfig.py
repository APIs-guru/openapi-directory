from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NotificationConfig:
    r"""NotificationConfig
    NotificationConfig defines the mechanisms to notify instance agent.
    """
    
    pubsub_notification: Optional[CloudPubSubNotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubNotification') }})
    
