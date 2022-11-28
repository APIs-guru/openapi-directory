from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Variant:
    r"""Variant
    Contains an asset property value (of a single type only).
    """
    
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanValue') }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleValue') }})
    integer_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerValue') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    
