from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClearAppsDataStatus:
    r"""ClearAppsDataStatus
    Status of the CLEAR_APP_DATA command to clear the data of specified apps from the device.
    """
    
    results: Optional[dict[str, PerAppResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
