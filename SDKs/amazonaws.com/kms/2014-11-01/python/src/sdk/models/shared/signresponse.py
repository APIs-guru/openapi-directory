from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SignResponse:
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Signature') }})
    signing_algorithm: Optional[SigningAlgorithmSpecEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SigningAlgorithm') }})
    
