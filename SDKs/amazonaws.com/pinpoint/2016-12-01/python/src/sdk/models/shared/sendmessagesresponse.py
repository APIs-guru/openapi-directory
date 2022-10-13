from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import messageresponse


@dataclass_json
@dataclass
class SendMessagesResponse:
    message_response: messageresponse.MessageResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageResponse' }})
    
