from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import custommessageactivity
from . import conditionalsplitactivity
from . import emailmessageactivity
from . import holdoutactivity
from . import multiconditionalsplitactivity
from . import pushmessageactivity
from . import randomsplitactivity
from . import smsmessageactivity
from . import waitactivity


@dataclass_json
@dataclass
class Activity:
    custom: Optional[custommessageactivity.CustomMessageActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CUSTOM' }})
    conditional_split: Optional[conditionalsplitactivity.ConditionalSplitActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConditionalSplit' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    email: Optional[emailmessageactivity.EmailMessageActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EMAIL' }})
    holdout: Optional[holdoutactivity.HoldoutActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Holdout' }})
    multi_condition: Optional[multiconditionalsplitactivity.MultiConditionalSplitActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MultiCondition' }})
    push: Optional[pushmessageactivity.PushMessageActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PUSH' }})
    random_split: Optional[randomsplitactivity.RandomSplitActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RandomSplit' }})
    sms: Optional[smsmessageactivity.SmsMessageActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SMS' }})
    wait: Optional[waitactivity.WaitActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Wait' }})
    
