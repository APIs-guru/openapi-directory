from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReEncryptResponse:
    ciphertext_blob: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CiphertextBlob') }})
    destination_encryption_algorithm: Optional[EncryptionAlgorithmSpecEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationEncryptionAlgorithm') }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    source_encryption_algorithm: Optional[EncryptionAlgorithmSpecEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceEncryptionAlgorithm') }})
    source_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceKeyId') }})
    
