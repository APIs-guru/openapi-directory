from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CloudPubSubNotificationConfig:
    r"""CloudPubSubNotificationConfig
    The configuration for Pub/Sub messaging for the connector.
    """
    
    pubsub_subscription: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubSubscription') }})
    
