from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreatePrintServerRequestInput:
    r"""CreatePrintServerRequestInput
    Request for adding a new print server.
    """
    
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    print_server: Optional[PrintServerInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('printServer') }})
    
