from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import sendusersmessageresponse


@dataclass_json
@dataclass
class SendUsersMessagesResponse:
    send_users_message_response: sendusersmessageresponse.SendUsersMessageResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SendUsersMessageResponse' }})
    
