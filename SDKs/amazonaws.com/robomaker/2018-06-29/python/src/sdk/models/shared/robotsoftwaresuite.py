from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RobotSoftwareSuite:
    r"""RobotSoftwareSuite
    Information about a robot software suite (ROS distribution).
    """
    
    name: Optional[RobotSoftwareSuiteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: Optional[RobotSoftwareSuiteVersionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
