from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CheckpointConfigurationUpdate:
    r"""CheckpointConfigurationUpdate
    Describes updates to the checkpointing parameters for a Flink-based Kinesis Data Analytics application.
    """
    
    checkpoint_interval_update: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckpointIntervalUpdate') }})
    checkpointing_enabled_update: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CheckpointingEnabledUpdate') }})
    configuration_type_update: Optional[ConfigurationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationTypeUpdate') }})
    min_pause_between_checkpoints_update: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinPauseBetweenCheckpointsUpdate') }})
    
