from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import inappmessagesresponse


@dataclass_json
@dataclass
class GetInAppMessagesResponse:
    in_app_messages_response: inappmessagesresponse.InAppMessagesResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InAppMessagesResponse' }})
    
