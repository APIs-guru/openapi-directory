from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProtocolException:
    reason: ProtocolExceptionReasonEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    method_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methodIndex') }})
    method_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methodName') }})
    retry_with_delay: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryWithDelay') }})
    trace: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trace') }})
    
