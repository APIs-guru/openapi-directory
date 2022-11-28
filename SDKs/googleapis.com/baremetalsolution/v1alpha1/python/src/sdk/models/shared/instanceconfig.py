from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceConfig:
    r"""InstanceConfig
    Configuration parameters for a new instance.
    """
    
    client_network: Optional[NetworkAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientNetwork') }})
    hyperthreading: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hyperthreading') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    os_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osImage') }})
    private_network: Optional[NetworkAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateNetwork') }})
    user_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userNote') }})
    
