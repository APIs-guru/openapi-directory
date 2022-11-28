from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateKeyPairResult:
    key_pair: Optional[KeyPair] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPair') }})
    operation: Optional[Operation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    private_key_base64: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateKeyBase64') }})
    public_key_base64: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKeyBase64') }})
    
