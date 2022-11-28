from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InferenceExecutionConfig:
    r"""InferenceExecutionConfig
    Specifies details about how containers in a multi-container endpoint are run.
    """
    
    mode: InferenceExecutionModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mode') }})
    
