from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import endpointmessageresult


@dataclass_json
@dataclass
class SendUsersMessageResponse:
    application_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationId' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestId' }})
    result: Optional[dict[str, dict[str, endpointmessageresult.EndpointMessageResult]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Result' }})
    
