from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import smschannelresponse


@dataclass_json
@dataclass
class DeleteSmsChannelResponse:
    sms_channel_response: smschannelresponse.SmsChannelResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SMSChannelResponse' }})
    
