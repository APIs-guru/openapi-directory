from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AdministratorWebTokenSpecPlaySearch:
    approve_apps: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approveApps') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    
