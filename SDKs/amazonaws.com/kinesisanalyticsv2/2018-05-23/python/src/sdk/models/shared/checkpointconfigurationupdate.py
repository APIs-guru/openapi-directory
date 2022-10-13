from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import configurationtype_enum


@dataclass_json
@dataclass
class CheckpointConfigurationUpdate:
    checkpoint_interval_update: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CheckpointIntervalUpdate' }})
    checkpointing_enabled_update: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CheckpointingEnabledUpdate' }})
    configuration_type_update: Optional[configurationtype_enum.ConfigurationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationTypeUpdate' }})
    min_pause_between_checkpoints_update: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinPauseBetweenCheckpointsUpdate' }})
    
