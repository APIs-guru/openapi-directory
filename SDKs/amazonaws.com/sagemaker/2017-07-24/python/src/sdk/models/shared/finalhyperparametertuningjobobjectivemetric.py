from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import hyperparametertuningjobobjectivetype_enum


@dataclass_json
@dataclass
class FinalHyperParameterTuningJobObjectiveMetric:
    metric_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricName' }})
    type: Optional[hyperparametertuningjobobjectivetype_enum.HyperParameterTuningJobObjectiveTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    value: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
