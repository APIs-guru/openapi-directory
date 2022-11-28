from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetCustomerServiceMetricResponse:
    r"""GetCustomerServiceMetricResponse
    This complex data type defines the response data that is returned from a request to getCustomerServiceMetric. The dimensionMetrics object contains the details of the dimension being measured and the calculated customer service metric values. The evaluationCycle defines the period used to calculate the metric values. The marketplaceId is the eBay marketplace for which the metrics are being considered.
    """
    
    dimension_metrics: Optional[List[DimensionMetric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionMetrics') }})
    evaluation_cycle: Optional[EvaluationCycle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationCycle') }})
    marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceId') }})
    
