from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GenerateDataKeyPairResponse:
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    key_pair_spec: Optional[DataKeyPairSpecEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyPairSpec') }})
    private_key_ciphertext_blob: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrivateKeyCiphertextBlob') }})
    private_key_plaintext: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrivateKeyPlaintext') }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicKey') }})
    
