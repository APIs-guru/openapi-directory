from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoMlJobObjective:
    r"""AutoMlJobObjective
    Specifies a metric to minimize or maximize as the objective of a job.
    """
    
    metric_name: AutoMlMetricEnumEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    
