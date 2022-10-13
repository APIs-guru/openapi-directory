from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GenerateDataKeyResponse:
    ciphertext_blob: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CiphertextBlob' }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    plaintext: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Plaintext' }})
    
