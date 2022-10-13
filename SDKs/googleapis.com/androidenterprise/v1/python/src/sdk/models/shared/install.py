from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class InstallInstallStateEnum(str, Enum):
    INSTALLED = "installed"
    INSTALL_PENDING = "installPending"


@dataclass_json
@dataclass
class Install:
    install_state: Optional[InstallInstallStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installState' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    version_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionCode' }})
    
