from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateAppPkg:
    app_pkg_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appPkgName') }})
    app_pkg_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appPkgPath') }})
    app_pkg_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appPkgVersion') }})
    checksum: Checksum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('checksum') }})
    app_provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appProvider') }})
    user_defined_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userDefinedData') }})
    
