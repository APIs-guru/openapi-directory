from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Metric:
    r"""Metric
    A calculation made by contrasting a measure and a dimension from your source data.
    """
    
    aggregation_function: AggregationFunctionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AggregationFunction') }})
    metric_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Namespace') }})
    
