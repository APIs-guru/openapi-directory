from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MaintenanceWindowIdentityForTarget:
    r"""MaintenanceWindowIdentityForTarget
    The maintenance window to which the specified target belongs.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    window_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WindowId') }})
    
