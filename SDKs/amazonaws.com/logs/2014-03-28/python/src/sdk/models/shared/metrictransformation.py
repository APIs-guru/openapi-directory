from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MetricTransformation:
    r"""MetricTransformation
    Indicates how to transform ingested log events to metric data in a CloudWatch metric.
    """
    
    metric_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricName') }})
    metric_namespace: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricNamespace') }})
    metric_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricValue') }})
    default_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValue') }})
    dimensions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    unit: Optional[StandardUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    
