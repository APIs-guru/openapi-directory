from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ClearAppsDataParams:
    r"""ClearAppsDataParams
    Parameters associated with the CLEAR_APP_DATA command to clear the data of specified apps from the device.
    """
    
    package_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageNames') }})
    
