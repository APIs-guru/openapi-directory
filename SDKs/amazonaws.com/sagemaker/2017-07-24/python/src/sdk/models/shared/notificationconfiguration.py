from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NotificationConfiguration:
    r"""NotificationConfiguration
    Configures Amazon SNS notifications of available or expiring work items for work teams.
    """
    
    notification_topic_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationTopicArn') }})
    
