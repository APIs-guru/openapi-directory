from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Slot:
    r"""Slot
    A value that Amazon Lex V2 uses to fulfill an intent. 
    """
    
    value: Optional[Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    values: Optional[List[Slot]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
