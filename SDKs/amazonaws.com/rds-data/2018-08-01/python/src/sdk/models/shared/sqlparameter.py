from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SQLParameter:
    r"""SQLParameter
    A parameter used in a SQL statement.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type_hint: Optional[TypeHintEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeHint') }})
    value: Optional[Field] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
