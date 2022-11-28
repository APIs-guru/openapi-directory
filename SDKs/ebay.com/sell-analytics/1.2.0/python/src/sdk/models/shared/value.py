from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Value:
    r"""Value
    A complex type that contains a value, plus the veracity of that value.
    """
    
    applicable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicable') }})
    value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
