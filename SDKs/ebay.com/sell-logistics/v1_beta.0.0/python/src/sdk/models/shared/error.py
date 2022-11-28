from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Error:
    r"""Error
    A container that defines the elements of error and warning message.
    """
    
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    error_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorId') }})
    input_ref_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputRefIds') }})
    long_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longMessage') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    output_ref_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputRefIds') }})
    parameters: Optional[List[ErrorParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    subdomain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subdomain') }})
    
