from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAccessOrderByMetricOrderBy:
    r"""GoogleAnalyticsAdminV1alphaAccessOrderByMetricOrderBy
    Sorts by metric values.
    """
    
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricName') }})
    
