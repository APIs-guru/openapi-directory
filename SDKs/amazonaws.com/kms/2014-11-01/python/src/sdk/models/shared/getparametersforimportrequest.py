from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetParametersForImportRequest:
    key_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    wrapping_algorithm: AlgorithmSpecEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WrappingAlgorithm') }})
    wrapping_key_spec: WrappingKeySpecEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WrappingKeySpec') }})
    
