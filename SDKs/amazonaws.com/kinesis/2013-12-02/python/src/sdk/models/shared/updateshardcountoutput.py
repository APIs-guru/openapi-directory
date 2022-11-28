from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateShardCountOutput:
    current_shard_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentShardCount') }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    target_shard_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetShardCount') }})
    
