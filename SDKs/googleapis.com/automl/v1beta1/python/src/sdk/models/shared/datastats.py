from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataStats:
    r"""DataStats
    The data statistics of a series of values that share the same DataType.
    """
    
    array_stats: Optional[ArrayStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arrayStats') }})
    category_stats: Optional[CategoryStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryStats') }})
    distinct_value_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distinctValueCount') }})
    float64_stats: Optional[Float64Stats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('float64Stats') }})
    null_value_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nullValueCount') }})
    string_stats: Optional[StringStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringStats') }})
    struct_stats: Optional[StructStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structStats') }})
    timestamp_stats: Optional[TimestampStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampStats') }})
    valid_value_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validValueCount') }})
    
