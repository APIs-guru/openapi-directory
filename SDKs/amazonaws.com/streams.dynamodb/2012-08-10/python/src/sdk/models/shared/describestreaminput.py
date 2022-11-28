from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeStreamInput:
    r"""DescribeStreamInput
    Represents the input of a <code>DescribeStream</code> operation.
    """
    
    stream_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamArn') }})
    exclusive_start_shard_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExclusiveStartShardId') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    
