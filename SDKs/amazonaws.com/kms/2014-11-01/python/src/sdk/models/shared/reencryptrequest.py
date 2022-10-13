from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import encryptionalgorithmspec_enum
from . import encryptionalgorithmspec_enum


@dataclass_json
@dataclass
class ReEncryptRequest:
    ciphertext_blob: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CiphertextBlob' }})
    destination_encryption_algorithm: Optional[encryptionalgorithmspec_enum.EncryptionAlgorithmSpecEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationEncryptionAlgorithm' }})
    destination_encryption_context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationEncryptionContext' }})
    destination_key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationKeyId' }})
    grant_tokens: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrantTokens' }})
    source_encryption_algorithm: Optional[encryptionalgorithmspec_enum.EncryptionAlgorithmSpecEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceEncryptionAlgorithm' }})
    source_encryption_context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceEncryptionContext' }})
    source_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceKeyId' }})
    
