from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import configurationtype_enum


@dataclass_json
@dataclass
class ParallelismConfigurationUpdate:
    auto_scaling_enabled_update: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingEnabledUpdate' }})
    configuration_type_update: Optional[configurationtype_enum.ConfigurationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationTypeUpdate' }})
    parallelism_per_kpu_update: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParallelismPerKPUUpdate' }})
    parallelism_update: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParallelismUpdate' }})
    
