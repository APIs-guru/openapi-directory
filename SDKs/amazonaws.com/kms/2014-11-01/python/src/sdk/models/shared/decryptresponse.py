from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import encryptionalgorithmspec_enum


@dataclass_json
@dataclass
class DecryptResponse:
    encryption_algorithm: Optional[encryptionalgorithmspec_enum.EncryptionAlgorithmSpecEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionAlgorithm' }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    plaintext: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Plaintext' }})
    
