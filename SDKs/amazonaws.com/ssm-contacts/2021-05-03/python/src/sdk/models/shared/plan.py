from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Plan:
    r"""Plan
    The stages that an escalation plan or engagement plan engages contacts and contact methods in.
    """
    
    stages: List[Stage] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Stages') }})
    
