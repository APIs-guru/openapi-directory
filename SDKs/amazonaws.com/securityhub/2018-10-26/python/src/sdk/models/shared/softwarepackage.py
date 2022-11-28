from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SoftwarePackage:
    r"""SoftwarePackage
    Information about a software package.
    """
    
    architecture: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Architecture') }})
    epoch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Epoch') }})
    file_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilePath') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    package_manager: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PackageManager') }})
    release: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Release') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
