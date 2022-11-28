from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NotificationSpecification:
    r"""NotificationSpecification
    The NotificationSpecification data structure describes a HIT event notification for a HIT type.
    """
    
    destination: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    event_types: List[EventTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventTypes') }})
    transport: NotificationTransportEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Transport') }})
    version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
