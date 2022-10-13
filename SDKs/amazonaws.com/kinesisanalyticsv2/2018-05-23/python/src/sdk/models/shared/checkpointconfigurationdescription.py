from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import configurationtype_enum


@dataclass_json
@dataclass
class CheckpointConfigurationDescription:
    checkpoint_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CheckpointInterval' }})
    checkpointing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CheckpointingEnabled' }})
    configuration_type: Optional[configurationtype_enum.ConfigurationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationType' }})
    min_pause_between_checkpoints: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinPauseBetweenCheckpoints' }})
    
