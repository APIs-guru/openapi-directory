from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Metric:
    r"""Metric
    This complex data type defines the details of the customer service metric and benchmark data related to the associated dimension.
    """
    
    benchmark: Optional[MetricBenchmark] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('benchmark') }})
    distributions: Optional[List[MetricDistribution]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributions') }})
    metric_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricKey') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
