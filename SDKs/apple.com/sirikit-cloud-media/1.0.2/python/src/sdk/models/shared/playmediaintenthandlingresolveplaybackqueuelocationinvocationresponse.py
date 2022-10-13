from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import executionmetrics


@dataclass_json
@dataclass
class PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponse:
    debug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debug' }})
    method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    metrics: Optional[executionmetrics.ExecutionMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    result: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
