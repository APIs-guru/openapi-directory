from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AlgorithmVersionInfoStatusEnum(str, Enum):
    REQUIRED = "REQUIRED"
    DISCOURAGED = "DISCOURAGED"


@dataclass_json
@dataclass
class AlgorithmVersionInfo:
    r"""AlgorithmVersionInfo
    Algorithm information
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: AlgorithmVersionInfoStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
