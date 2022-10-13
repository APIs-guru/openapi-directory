from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SendPipelineExecutionStepFailureRequest:
    callback_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CallbackToken' }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    
