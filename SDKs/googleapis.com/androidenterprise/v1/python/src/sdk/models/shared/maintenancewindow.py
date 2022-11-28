from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MaintenanceWindow:
    r"""MaintenanceWindow
    Maintenance window for managed Google Play Accounts. This allows Play store to update the apps on the foreground in the designated window.
    """
    
    duration_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationMs') }})
    start_time_after_midnight_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimeAfterMidnightMs') }})
    
