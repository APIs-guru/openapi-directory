from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CheckpointConfiguration:
    r"""CheckpointConfiguration
    Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see <a href=\"https://ci.apache.org/projects/flink/flink-docs-release-1.8/concepts/programming-model.html#checkpoints-for-fault-tolerance\"> Checkpoints for Fault Tolerance</a> in the <a href=\"https://ci.apache.org/projects/flink/flink-docs-release-1.8/\">Apache Flink Documentation</a>.
    """
    
    configuration_type: ConfigurationTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationType') }})
    checkpoint_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckpointInterval') }})
    checkpointing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckpointingEnabled') }})
    min_pause_between_checkpoints: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinPauseBetweenCheckpoints') }})
    
