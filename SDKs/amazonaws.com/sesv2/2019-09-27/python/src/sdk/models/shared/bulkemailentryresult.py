from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BulkEmailEntryResult:
    r"""BulkEmailEntryResult
    The result of the <code>SendBulkEmail</code> operation of each specified <code>BulkEmailEntry</code>.
    """
    
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    message_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageId') }})
    status: Optional[BulkEmailStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
