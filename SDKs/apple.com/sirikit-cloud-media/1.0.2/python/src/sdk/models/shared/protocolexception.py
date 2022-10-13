from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import protocolexceptionreason_enum


@dataclass_json
@dataclass
class ProtocolException:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    method_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'methodIndex' }})
    method_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'methodName' }})
    reason: protocolexceptionreason_enum.ProtocolExceptionReasonEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    retry_with_delay: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryWithDelay' }})
    trace: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trace' }})
    
