from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CheckCompatibilityRequestCompatibilityFilterEnum(str, Enum):
    COMPATIBILITY_UNSPECIFIED = "COMPATIBILITY_UNSPECIFIED"
    COMPATIBLE = "COMPATIBLE"
    INCOMPATIBLE = "INCOMPATIBLE"


@dataclass_json
@dataclass
class CheckCompatibilityRequest:
    r"""CheckCompatibilityRequest
    The request for compatibility information for a report's dimensions and metrics. Check compatibility provides a preview of the compatibility of a report; fields shared with the `runReport` request should be the same values as in your `runReport` request.
    """
    
    compatibility_filter: Optional[CheckCompatibilityRequestCompatibilityFilterEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibilityFilter') }})
    dimension_filter: Optional[FilterExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilter') }})
    dimensions: Optional[List[Dimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    metric_filter: Optional[FilterExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricFilter') }})
    metrics: Optional[List[Metric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    
