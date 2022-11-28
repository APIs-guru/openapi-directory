from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportRow:
    r"""ReportRow
    A row of the returning report.
    """
    
    dimension_values: Optional[dict[str, ReportRowDimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionValues') }})
    metric_values: Optional[dict[str, ReportRowMetricValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricValues') }})
    
