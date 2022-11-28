from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DisplayStateEnum(str, Enum):
    DISPLAY_STATE_UNSPECIFIED = "DISPLAY_STATE_UNSPECIFIED"
    OFF = "OFF"
    ON = "ON"
    DOZE = "DOZE"
    SUSPENDED = "SUSPENDED"


@dataclass_json
@dataclass
class Display:
    r"""Display
    Device display information.
    """
    
    density: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('density') }})
    display_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayId') }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    refresh_rate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshRate') }})
    state: Optional[DisplayStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
