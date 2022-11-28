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
class GetShardIteratorInput:
    r"""GetShardIteratorInput
    Represents the input for <code>GetShardIterator</code>.
    """
    
    shard_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardId') }})
    shard_iterator_type: ShardIteratorTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardIteratorType') }})
    stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    starting_sequence_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartingSequenceNumber') }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
