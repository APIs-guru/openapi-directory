from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SendAutomationSignalRequest:
    automation_execution_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutomationExecutionId') }})
    signal_type: SignalTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SignalType') }})
    payload: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Payload') }})
    
