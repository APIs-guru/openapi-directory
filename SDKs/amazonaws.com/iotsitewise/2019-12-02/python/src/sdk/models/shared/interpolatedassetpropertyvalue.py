from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InterpolatedAssetPropertyValue:
    r"""InterpolatedAssetPropertyValue
    Contains information about an interpolated asset property value.
    """
    
    timestamp: TimeInNanos = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    value: Variant = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
