from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CommandFilter:
    r"""CommandFilter
    <p>Describes a command filter.</p> <note> <p>An instance ID can't be specified when a command status is <code>Pending</code> because the command hasn't run on the instance yet.</p> </note>
    """
    
    key: CommandFilterKeyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
