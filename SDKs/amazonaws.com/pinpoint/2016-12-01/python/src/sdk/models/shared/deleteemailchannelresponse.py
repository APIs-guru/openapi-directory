from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import emailchannelresponse


@dataclass_json
@dataclass
class DeleteEmailChannelResponse:
    email_channel_response: emailchannelresponse.EmailChannelResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailChannelResponse' }})
    
