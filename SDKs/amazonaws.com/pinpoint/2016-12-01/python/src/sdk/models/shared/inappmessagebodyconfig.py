from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InAppMessageBodyConfig:
    r"""InAppMessageBodyConfig
    Text config for Message Body.
    """
    
    alignment: AlignmentEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Alignment') }})
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Body') }})
    text_color: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextColor') }})
    
