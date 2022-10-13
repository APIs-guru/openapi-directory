from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import vmmanagertype_enum
from . import vmserveraddress


@dataclass_json
@dataclass
class VMServer:
    vm_manager_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmManagerName' }})
    vm_manager_type: Optional[vmmanagertype_enum.VMManagerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmManagerType' }})
    vm_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmName' }})
    vm_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmPath' }})
    vm_server_address: Optional[vmserveraddress.VMServerAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmServerAddress' }})
    
