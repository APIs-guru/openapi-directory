from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ArrayValue:
    r"""ArrayValue
    Contains an array.
    """
    
    array_values: Optional[List[ArrayValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arrayValues') }})
    boolean_values: Optional[List[bool]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanValues') }})
    double_values: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleValues') }})
    long_values: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longValues') }})
    string_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValues') }})
    
