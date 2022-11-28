from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StandardsSubscription:
    r"""StandardsSubscription
    A resource that represents your subscription to a supported standard.
    """
    
    standards_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandardsArn') }})
    standards_input: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandardsInput') }})
    standards_status: StandardsStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandardsStatus') }})
    standards_subscription_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandardsSubscriptionArn') }})
    
