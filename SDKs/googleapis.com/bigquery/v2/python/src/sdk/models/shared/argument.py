from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ArgumentArgumentKindEnum(str, Enum):
    ARGUMENT_KIND_UNSPECIFIED = "ARGUMENT_KIND_UNSPECIFIED"
    FIXED_TYPE = "FIXED_TYPE"
    ANY_TYPE = "ANY_TYPE"

class ArgumentModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    IN = "IN"
    OUT = "OUT"
    INOUT = "INOUT"


@dataclass_json
@dataclass
class Argument:
    r"""Argument
    Input/output argument of a function or a stored procedure.
    """
    
    argument_kind: Optional[ArgumentArgumentKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('argumentKind') }})
    data_type: Optional[StandardSQLDataType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    mode: Optional[ArgumentModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
