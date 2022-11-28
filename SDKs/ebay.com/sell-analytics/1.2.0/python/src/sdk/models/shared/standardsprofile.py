from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StandardsProfile:
    r"""StandardsProfile
    A complex type that defines a seller profile.
    """
    
    cycle: Optional[Cycle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cycle') }})
    default_program: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultProgram') }})
    evaluation_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationReason') }})
    metrics: Optional[List[Metric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    program: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('program') }})
    standards_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardsLevel') }})
    
