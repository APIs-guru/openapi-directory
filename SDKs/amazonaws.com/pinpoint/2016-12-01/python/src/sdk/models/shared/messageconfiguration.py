from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MessageConfiguration:
    r"""MessageConfiguration
    Specifies the message configuration settings for a campaign.
    """
    
    adm_message: Optional[Message] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ADMMessage') }})
    apns_message: Optional[Message] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('APNSMessage') }})
    baidu_message: Optional[Message] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaiduMessage') }})
    custom_message: Optional[CampaignCustomMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomMessage') }})
    default_message: Optional[Message] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultMessage') }})
    email_message: Optional[CampaignEmailMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailMessage') }})
    gcm_message: Optional[Message] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GCMMessage') }})
    in_app_message: Optional[CampaignInAppMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InAppMessage') }})
    sms_message: Optional[CampaignSmsMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SMSMessage') }})
    
