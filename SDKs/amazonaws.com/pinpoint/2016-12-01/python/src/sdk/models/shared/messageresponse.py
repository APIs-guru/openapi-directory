from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import endpointmessageresult
from . import messageresult


@dataclass_json
@dataclass
class MessageResponse:
    application_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationId' }})
    endpoint_result: Optional[dict[str, endpointmessageresult.EndpointMessageResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointResult' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestId' }})
    result: Optional[dict[str, messageresult.MessageResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Result' }})
    
