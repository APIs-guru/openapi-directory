from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AttributeDimension:
    r"""AttributeDimension
    Specifies attribute-based criteria for including or excluding endpoints from a segment.
    """
    
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    attribute_type: Optional[AttributeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeType') }})
    
