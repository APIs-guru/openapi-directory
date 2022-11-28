from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DimensionMetric:
    r"""DimensionMetric
    This complex type defines a the customer service metrics and seller benchmark performance related to a given dimension.
    """
    
    dimension: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension') }})
    metrics: Optional[List[Metric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    
