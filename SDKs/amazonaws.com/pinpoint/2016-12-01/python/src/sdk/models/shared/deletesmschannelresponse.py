from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteSmsChannelResponse:
    sms_channel_response: SmsChannelResponse = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SMSChannelResponse') }})
    
