from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import checksum


@dataclass_json
@dataclass
class CreateAppPkg:
    app_pkg_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appPkgName' }})
    app_pkg_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appPkgPath' }})
    app_pkg_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appPkgVersion' }})
    app_provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appProvider' }})
    checksum: checksum.Checksum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checksum' }})
    user_defined_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userDefinedData' }})
    
