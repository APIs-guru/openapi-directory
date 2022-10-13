from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SoftwareInformation:
    install_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installState' }})
    installed_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installedVersion' }})
    installing_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installingVersion' }})
    
