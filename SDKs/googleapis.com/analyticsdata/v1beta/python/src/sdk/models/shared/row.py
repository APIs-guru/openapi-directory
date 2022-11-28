from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Row:
    r"""Row
    Report data for each row. For example if RunReportRequest contains: ```none \"dimensions\": [ { \"name\": \"eventName\" }, { \"name\": \"countryId\" } ], \"metrics\": [ { \"name\": \"eventCount\" } ] ``` One row with 'in_app_purchase' as the eventName, 'JP' as the countryId, and 15 as the eventCount, would be: ```none \"dimensionValues\": [ { \"value\": \"in_app_purchase\" }, { \"value\": \"JP\" } ], \"metricValues\": [ { \"value\": \"15\" } ] ```
    """
    
    dimension_values: Optional[List[DimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionValues') }})
    metric_values: Optional[List[MetricValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricValues') }})
    
