from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IncidentTemplate:
    r"""IncidentTemplate
    Basic details used in creating a response plan. The response plan is then used to create an incident record.
    """
    
    impact: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('impact') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    dedupe_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dedupeString') }})
    notification_targets: Optional[List[NotificationTargetItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationTargets') }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    
