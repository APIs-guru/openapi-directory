from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Dimension:
    r"""Dimension
    This message carries publisher provided breakdown. E.g. {dimension_type: 'COUNTRY', [{dimension_value: {id: 1, name: 'US'}}, {dimension_value: {id: 2, name: 'UK'}}]}
    """
    
    dimension_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionType') }})
    dimension_values: Optional[List[DimensionDimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionValues') }})
    
