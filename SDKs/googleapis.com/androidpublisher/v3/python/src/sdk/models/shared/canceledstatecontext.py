from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CanceledStateContext:
    r"""CanceledStateContext
    Information specific to a subscription in canceled state.
    """
    
    developer_initiated_cancellation: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerInitiatedCancellation') }})
    replacement_cancellation: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replacementCancellation') }})
    system_initiated_cancellation: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemInitiatedCancellation') }})
    user_initiated_cancellation: Optional[UserInitiatedCancellation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInitiatedCancellation') }})
    
