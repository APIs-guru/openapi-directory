from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchPermissionsFailureEntry:
    r"""BatchPermissionsFailureEntry
    A list of failures when performing a batch grant or batch revoke operation.
    """
    
    error: Optional[ErrorDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    request_entry: Optional[BatchPermissionsRequestEntry] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestEntry') }})
    
