from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SoftwareInformation:
    r"""SoftwareInformation
    Information about the software on the device.
    """
    
    install_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installState') }})
    installed_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installedVersion') }})
    installing_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installingVersion') }})
    
