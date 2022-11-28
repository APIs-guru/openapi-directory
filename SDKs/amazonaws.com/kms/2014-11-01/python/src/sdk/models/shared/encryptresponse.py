from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EncryptResponse:
    ciphertext_blob: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CiphertextBlob') }})
    encryption_algorithm: Optional[EncryptionAlgorithmSpecEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionAlgorithm') }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    
