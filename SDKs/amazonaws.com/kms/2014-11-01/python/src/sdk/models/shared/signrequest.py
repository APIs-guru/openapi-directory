from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SignRequest:
    key_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    signing_algorithm: SigningAlgorithmSpecEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningAlgorithm') }})
    grant_tokens: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GrantTokens') }})
    message_type: Optional[MessageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageType') }})
    
