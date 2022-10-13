from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import encryptiontype_enum


@dataclass_json
@dataclass
class PutRecordOutput:
    encryption_type: Optional[encryptiontype_enum.EncryptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionType' }})
    sequence_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SequenceNumber' }})
    shard_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShardId' }})
    
