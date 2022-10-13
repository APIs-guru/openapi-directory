from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import automlmetricenum_enum


@dataclass_json
@dataclass
class AutoMlJobObjective:
    metric_name: automlmetricenum_enum.AutoMlMetricEnumEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricName' }})
    
