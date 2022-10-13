from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PersonalApplicationPolicyInstallTypeEnum(str, Enum):
    INSTALL_TYPE_UNSPECIFIED = "INSTALL_TYPE_UNSPECIFIED"
    BLOCKED = "BLOCKED"
    AVAILABLE = "AVAILABLE"


@dataclass_json
@dataclass
class PersonalApplicationPolicy:
    install_type: Optional[PersonalApplicationPolicyInstallTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installType' }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageName' }})
    
