from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReEncryptRequest:
    ciphertext_blob: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CiphertextBlob') }})
    destination_key_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationKeyId') }})
    destination_encryption_algorithm: Optional[EncryptionAlgorithmSpecEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationEncryptionAlgorithm') }})
    destination_encryption_context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationEncryptionContext') }})
    grant_tokens: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantTokens') }})
    source_encryption_algorithm: Optional[EncryptionAlgorithmSpecEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceEncryptionAlgorithm') }})
    source_encryption_context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceEncryptionContext') }})
    source_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceKeyId') }})
    
