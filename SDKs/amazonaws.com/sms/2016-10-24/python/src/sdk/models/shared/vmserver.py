from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VMServer:
    r"""VMServer
    Represents a VM server.
    """
    
    vm_manager_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmManagerName') }})
    vm_manager_type: Optional[VMManagerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmManagerType') }})
    vm_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmName') }})
    vm_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmPath') }})
    vm_server_address: Optional[VMServerAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmServerAddress') }})
    
