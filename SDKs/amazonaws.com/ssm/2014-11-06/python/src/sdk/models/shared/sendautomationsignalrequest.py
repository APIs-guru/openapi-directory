from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import signaltype_enum


@dataclass_json
@dataclass
class SendAutomationSignalRequest:
    automation_execution_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutomationExecutionId' }})
    payload: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Payload' }})
    signal_type: signaltype_enum.SignalTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SignalType' }})
    
