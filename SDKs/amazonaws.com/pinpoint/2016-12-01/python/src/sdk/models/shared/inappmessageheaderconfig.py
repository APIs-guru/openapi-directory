from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InAppMessageHeaderConfig:
    r"""InAppMessageHeaderConfig
    Text config for Message Header.
    """
    
    alignment: AlignmentEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Alignment') }})
    header: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Header') }})
    text_color: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextColor') }})
    
