from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutRecordOutput:
    r"""PutRecordOutput
    Represents the output for <code>PutRecord</code>.
    """
    
    sequence_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SequenceNumber') }})
    shard_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardId') }})
    encryption_type: Optional[EncryptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionType') }})
    
