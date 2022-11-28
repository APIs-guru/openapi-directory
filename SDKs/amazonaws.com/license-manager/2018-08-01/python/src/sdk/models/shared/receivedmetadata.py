from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReceivedMetadata:
    r"""ReceivedMetadata
    Metadata associated with received licenses and grants.
    """
    
    allowed_operations: Optional[List[AllowedOperationEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowedOperations') }})
    received_status: Optional[ReceivedStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReceivedStatus') }})
    received_status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReceivedStatusReason') }})
    
