from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetShardIteratorInput:
    r"""GetShardIteratorInput
    Represents the input of a <code>GetShardIterator</code> operation.
    """
    
    shard_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardId') }})
    shard_iterator_type: ShardIteratorTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardIteratorType') }})
    stream_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamArn') }})
    sequence_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SequenceNumber') }})
    
