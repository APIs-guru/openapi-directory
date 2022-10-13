from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import automlmetricenum_enum
from . import automljobobjectivetype_enum


@dataclass_json
@dataclass
class FinalAutoMlJobObjectiveMetric:
    metric_name: automlmetricenum_enum.AutoMlMetricEnumEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricName' }})
    type: Optional[automljobobjectivetype_enum.AutoMlJobObjectiveTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    value: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
