from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlayMediaIntentHandlingResolveMediaItemsInvocationResponse:
    method: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    result: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    debug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debug') }})
    metrics: Optional[ExecutionMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    
