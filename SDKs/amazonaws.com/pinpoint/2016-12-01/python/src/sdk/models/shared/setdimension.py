from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SetDimension:
    r"""SetDimension
    Specifies the dimension type and values for a segment dimension.
    """
    
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    dimension_type: Optional[DimensionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionType') }})
    
