from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeLogStreamsRequest:
    log_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logGroupName') }})
    descending: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('descending') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    log_stream_name_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logStreamNamePrefix') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    order_by: Optional[OrderByEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBy') }})
    
