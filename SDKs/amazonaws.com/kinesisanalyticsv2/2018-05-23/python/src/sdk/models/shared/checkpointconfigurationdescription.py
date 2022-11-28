from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CheckpointConfigurationDescription:
    r"""CheckpointConfigurationDescription
    Describes checkpointing parameters for a Flink-based Kinesis Data Analytics application.
    """
    
    checkpoint_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckpointInterval') }})
    checkpointing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckpointingEnabled') }})
    configuration_type: Optional[ConfigurationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationType') }})
    min_pause_between_checkpoints: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinPauseBetweenCheckpoints') }})
    
