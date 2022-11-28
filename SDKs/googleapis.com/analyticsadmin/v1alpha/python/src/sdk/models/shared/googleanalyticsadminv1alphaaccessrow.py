from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAccessRow:
    r"""GoogleAnalyticsAdminV1alphaAccessRow
    Access report data for each row.
    """
    
    dimension_values: Optional[List[GoogleAnalyticsAdminV1alphaAccessDimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionValues') }})
    metric_values: Optional[List[GoogleAnalyticsAdminV1alphaAccessMetricValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricValues') }})
    
