from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAccessMetric:
    r"""GoogleAnalyticsAdminV1alphaAccessMetric
    The quantitative measurements of a report. For example, the metric `accessCount` is the total number of data access records.
    """
    
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricName') }})
    
