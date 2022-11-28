from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OperatingSystem:
    r"""OperatingSystem
    Describes supported operating systems in AWS OpsWorks Stacks.
    """
    
    configuration_managers: Optional[List[OperatingSystemConfigurationManager]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationManagers') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    reported_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportedName') }})
    reported_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportedVersion') }})
    supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Supported') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
