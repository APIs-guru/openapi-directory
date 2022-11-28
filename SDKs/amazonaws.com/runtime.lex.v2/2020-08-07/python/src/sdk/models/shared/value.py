from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Value:
    r"""Value
    The value of a slot.
    """
    
    interpreted_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interpretedValue') }})
    original_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalValue') }})
    resolved_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolvedValues') }})
    
