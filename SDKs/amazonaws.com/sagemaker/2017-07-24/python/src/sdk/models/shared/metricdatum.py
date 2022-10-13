from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import automlmetricenum_enum
from . import metricsetsource_enum


@dataclass_json
@dataclass
class MetricDatum:
    metric_name: Optional[automlmetricenum_enum.AutoMlMetricEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricName' }})
    set: Optional[metricsetsource_enum.MetricSetSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Set' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
