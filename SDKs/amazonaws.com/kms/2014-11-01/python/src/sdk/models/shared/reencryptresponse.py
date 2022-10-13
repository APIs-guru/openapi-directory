from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import encryptionalgorithmspec_enum
from . import encryptionalgorithmspec_enum


@dataclass_json
@dataclass
class ReEncryptResponse:
    ciphertext_blob: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CiphertextBlob' }})
    destination_encryption_algorithm: Optional[encryptionalgorithmspec_enum.EncryptionAlgorithmSpecEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationEncryptionAlgorithm' }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    source_encryption_algorithm: Optional[encryptionalgorithmspec_enum.EncryptionAlgorithmSpecEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceEncryptionAlgorithm' }})
    source_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceKeyId' }})
    
