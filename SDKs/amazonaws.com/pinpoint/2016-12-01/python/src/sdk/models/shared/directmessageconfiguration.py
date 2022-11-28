from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DirectMessageConfiguration:
    r"""DirectMessageConfiguration
    Specifies the settings and content for the default message and any default messages that you tailored for specific channels.
    """
    
    adm_message: Optional[AdmMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ADMMessage') }})
    apns_message: Optional[ApnsMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('APNSMessage') }})
    baidu_message: Optional[BaiduMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaiduMessage') }})
    default_message: Optional[DefaultMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultMessage') }})
    default_push_notification_message: Optional[DefaultPushNotificationMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultPushNotificationMessage') }})
    email_message: Optional[EmailMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailMessage') }})
    gcm_message: Optional[GcmMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GCMMessage') }})
    sms_message: Optional[SmsMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SMSMessage') }})
    voice_message: Optional[VoiceMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VoiceMessage') }})
    
