from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LaunchedInstance:
    r"""LaunchedInstance
    Configure launced instance.
    """
    
    ec2_instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2InstanceID') }})
    first_boot: Optional[FirstBootEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstBoot') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobID') }})
    
