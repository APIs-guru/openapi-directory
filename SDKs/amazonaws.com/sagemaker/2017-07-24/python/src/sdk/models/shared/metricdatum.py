from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MetricDatum:
    r"""MetricDatum
    Information about the metric for a candidate produced by an AutoML job.
    """
    
    metric_name: Optional[AutoMlMetricEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    set: Optional[MetricSetSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Set') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
