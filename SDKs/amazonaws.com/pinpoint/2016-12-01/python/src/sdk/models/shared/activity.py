from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Activity:
    r"""Activity
    Specifies the configuration and other settings for an activity in a journey.
    """
    
    custom: Optional[CustomMessageActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CUSTOM') }})
    conditional_split: Optional[ConditionalSplitActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConditionalSplit') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    email: Optional[EmailMessageActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EMAIL') }})
    holdout: Optional[HoldoutActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Holdout') }})
    multi_condition: Optional[MultiConditionalSplitActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MultiCondition') }})
    push: Optional[PushMessageActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PUSH') }})
    random_split: Optional[RandomSplitActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RandomSplit') }})
    sms: Optional[SmsMessageActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SMS') }})
    wait: Optional[WaitActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Wait') }})
    
