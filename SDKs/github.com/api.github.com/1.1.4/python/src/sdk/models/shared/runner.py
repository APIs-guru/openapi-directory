from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RunnerLabelsTypeEnum(str, Enum):
    READ_ONLY = "read-only"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class RunnerLabels:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[RunnerLabelsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class Runner:
    r"""Runner
    A self hosted runner
    """
    
    busy: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('busy') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: List[RunnerLabels] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
