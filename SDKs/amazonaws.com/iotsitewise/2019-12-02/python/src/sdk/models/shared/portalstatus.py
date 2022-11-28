from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PortalStatus:
    r"""PortalStatus
    Contains information about the current status of a portal.
    """
    
    state: PortalStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    error: Optional[MonitorErrorDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    
