from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StudioComponentConfiguration:
    r"""StudioComponentConfiguration
    The configuration of the studio component, based on component type.
    """
    
    active_directory_configuration: Optional[ActiveDirectoryConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeDirectoryConfiguration') }})
    compute_farm_configuration: Optional[ComputeFarmConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeFarmConfiguration') }})
    license_service_configuration: Optional[LicenseServiceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseServiceConfiguration') }})
    shared_file_system_configuration: Optional[SharedFileSystemConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedFileSystemConfiguration') }})
    
