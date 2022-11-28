from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CheckCompatibilityResponse:
    r"""CheckCompatibilityResponse
    The compatibility response with the compatibility of each dimension & metric.
    """
    
    dimension_compatibilities: Optional[List[DimensionCompatibility]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionCompatibilities') }})
    metric_compatibilities: Optional[List[MetricCompatibility]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricCompatibilities') }})
    
