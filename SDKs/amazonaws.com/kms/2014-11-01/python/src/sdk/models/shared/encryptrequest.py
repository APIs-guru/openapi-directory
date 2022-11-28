from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EncryptRequest:
    key_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    plaintext: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Plaintext') }})
    encryption_algorithm: Optional[EncryptionAlgorithmSpecEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionAlgorithm') }})
    encryption_context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionContext') }})
    grant_tokens: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantTokens') }})
    
