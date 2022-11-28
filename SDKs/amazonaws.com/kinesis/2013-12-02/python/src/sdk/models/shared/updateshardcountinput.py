from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateShardCountInput:
    scaling_type: ScalingTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingType') }})
    stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    target_shard_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetShardCount') }})
    
