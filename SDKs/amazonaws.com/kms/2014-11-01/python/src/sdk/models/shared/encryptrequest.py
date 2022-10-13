from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import encryptionalgorithmspec_enum


@dataclass_json
@dataclass
class EncryptRequest:
    encryption_algorithm: Optional[encryptionalgorithmspec_enum.EncryptionAlgorithmSpecEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionAlgorithm' }})
    encryption_context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionContext' }})
    grant_tokens: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrantTokens' }})
    key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    plaintext: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Plaintext' }})
    
