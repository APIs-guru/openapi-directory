from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NetworkPathComponent:
    r"""NetworkPathComponent
    Information about a network path component.
    """
    
    component_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComponentId') }})
    component_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComponentType') }})
    egress: Optional[NetworkHeader] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Egress') }})
    ingress: Optional[NetworkHeader] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ingress') }})
    
