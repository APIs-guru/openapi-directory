from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import configurationtype_enum


@dataclass_json
@dataclass
class ParallelismConfiguration:
    auto_scaling_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingEnabled' }})
    configuration_type: configurationtype_enum.ConfigurationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationType' }})
    parallelism: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parallelism' }})
    parallelism_per_kpu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParallelismPerKPU' }})
    
