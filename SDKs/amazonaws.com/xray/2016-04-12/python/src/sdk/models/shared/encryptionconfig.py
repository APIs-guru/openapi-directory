from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import encryptionstatus_enum
from . import encryptiontype_enum


@dataclass_json
@dataclass
class EncryptionConfig:
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    status: Optional[encryptionstatus_enum.EncryptionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    type: Optional[encryptiontype_enum.EncryptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
