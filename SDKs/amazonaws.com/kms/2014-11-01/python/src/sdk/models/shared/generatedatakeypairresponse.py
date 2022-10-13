from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datakeypairspec_enum


@dataclass_json
@dataclass
class GenerateDataKeyPairResponse:
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    key_pair_spec: Optional[datakeypairspec_enum.DataKeyPairSpecEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyPairSpec' }})
    private_key_ciphertext_blob: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrivateKeyCiphertextBlob' }})
    private_key_plaintext: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrivateKeyPlaintext' }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicKey' }})
    
