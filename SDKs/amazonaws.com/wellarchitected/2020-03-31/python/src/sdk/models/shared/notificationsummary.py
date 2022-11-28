from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NotificationSummary:
    r"""NotificationSummary
    A notification summary return object.
    """
    
    lens_upgrade_summary: Optional[LensUpgradeSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LensUpgradeSummary') }})
    type: Optional[NotificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
