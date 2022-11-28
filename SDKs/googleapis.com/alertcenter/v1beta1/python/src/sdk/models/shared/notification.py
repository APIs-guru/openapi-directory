from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Notification:
    r"""Notification
    Settings for callback notifications. For more details see [Google Workspace Alert Notification](https://developers.google.com/admin-sdk/alertcenter/guides/notifications).
    """
    
    cloud_pubsub_topic: Optional[CloudPubsubTopic] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudPubsubTopic') }})
    
