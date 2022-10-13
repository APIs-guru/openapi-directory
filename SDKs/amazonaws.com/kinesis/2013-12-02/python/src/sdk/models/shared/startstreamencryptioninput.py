from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import encryptiontype_enum


@dataclass_json
@dataclass
class StartStreamEncryptionInput:
    encryption_type: encryptiontype_enum.EncryptionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionType' }})
    key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamName' }})
    
