from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import message
from . import message
from . import message
from . import campaigncustommessage
from . import message
from . import campaignemailmessage
from . import message
from . import campaigninappmessage
from . import campaignsmsmessage


@dataclass_json
@dataclass
class MessageConfiguration:
    adm_message: Optional[message.Message] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ADMMessage' }})
    apns_message: Optional[message.Message] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'APNSMessage' }})
    baidu_message: Optional[message.Message] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaiduMessage' }})
    custom_message: Optional[campaigncustommessage.CampaignCustomMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomMessage' }})
    default_message: Optional[message.Message] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultMessage' }})
    email_message: Optional[campaignemailmessage.CampaignEmailMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailMessage' }})
    gcm_message: Optional[message.Message] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GCMMessage' }})
    in_app_message: Optional[campaigninappmessage.CampaignInAppMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InAppMessage' }})
    sms_message: Optional[campaignsmsmessage.CampaignSmsMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SMSMessage' }})
    
