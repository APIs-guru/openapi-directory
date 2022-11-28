from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StopStreamEncryptionInput:
    encryption_type: EncryptionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionType') }})
    key_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    
