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
class FinalAutoMlJobObjectiveMetric:
    r"""FinalAutoMlJobObjectiveMetric
    The best candidate result from an AutoML training job.
    """
    
    metric_name: AutoMlMetricEnumEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    value: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    type: Optional[AutoMlJobObjectiveTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
