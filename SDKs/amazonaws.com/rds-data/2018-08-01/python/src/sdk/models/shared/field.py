from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Field:
    r"""Field
    Contains a value.
    """
    
    array_value: Optional[ArrayValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arrayValue') }})
    blob_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobValue') }})
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanValue') }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleValue') }})
    is_null: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isNull') }})
    long_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longValue') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    
