from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DialogAction:
    r"""DialogAction
    The next action that Amazon Lex V2 should take.
    """
    
    type: DialogActionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    slot_to_elicit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slotToElicit') }})
    
