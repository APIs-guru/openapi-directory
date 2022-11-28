from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PivotDimensionHeader:
    r"""PivotDimensionHeader
    Summarizes dimension values from a row for this pivot.
    """
    
    dimension_values: Optional[List[DimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionValues') }})
    
