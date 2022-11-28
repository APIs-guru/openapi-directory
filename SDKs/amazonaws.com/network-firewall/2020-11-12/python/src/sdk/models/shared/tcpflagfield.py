from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TCPFlagField:
    r"""TCPFlagField
    TCP flags and masks to inspect packets for, used in stateless rules <a>MatchAttributes</a> settings.
    """
    
    flags: List[TCPFlagEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Flags') }})
    masks: Optional[List[TCPFlagEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Masks') }})
    
