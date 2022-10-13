from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import standardsstatus_enum


@dataclass_json
@dataclass
class StandardsSubscription:
    standards_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StandardsArn' }})
    standards_input: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StandardsInput' }})
    standards_status: standardsstatus_enum.StandardsStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StandardsStatus' }})
    standards_subscription_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StandardsSubscriptionArn' }})
    
