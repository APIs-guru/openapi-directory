from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NetworkHeader:
    r"""NetworkHeader
    Details about a network path component that occurs before or after the current component.
    """
    
    destination: Optional[NetworkPathComponentDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    source: Optional[NetworkPathComponentDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Source') }})
    
