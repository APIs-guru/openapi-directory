from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PropertyType:
    r"""PropertyType
    Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>.
    """
    
    attribute: Optional[Attribute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribute') }})
    measurement: Optional[Measurement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurement') }})
    metric: Optional[Metric] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    transform: Optional[Transform] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transform') }})
    
