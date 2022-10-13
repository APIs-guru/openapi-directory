from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import protocolexception
from . import executionmetrics


@dataclass_json
@dataclass
class ProtocolExceptionInvocationResponse:
    debug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debug' }})
    exception: protocolexception.ProtocolException = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exception' }})
    method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    metrics: Optional[executionmetrics.ExecutionMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    result: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
