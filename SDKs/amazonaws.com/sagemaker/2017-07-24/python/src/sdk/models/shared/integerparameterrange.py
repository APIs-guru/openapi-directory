from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import hyperparameterscalingtype_enum


@dataclass_json
@dataclass
class IntegerParameterRange:
    max_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxValue' }})
    min_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinValue' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scaling_type: Optional[hyperparameterscalingtype_enum.HyperParameterScalingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingType' }})
    
