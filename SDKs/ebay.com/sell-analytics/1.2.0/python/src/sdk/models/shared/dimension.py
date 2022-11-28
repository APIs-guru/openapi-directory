from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Dimension:
    r"""Dimension
    The fields in this complex type define the dimension, or attributes, by which the associated customer service metric and benchmark data is measured. The value of dimensionKey gets set according to the configuration of the input request. The name and value pair further define dimension under the key.
    """
    
    dimension_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionKey') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
