from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import admmessage
from . import apnsmessage
from . import baidumessage
from . import defaultmessage
from . import defaultpushnotificationmessage
from . import emailmessage
from . import gcmmessage
from . import smsmessage
from . import voicemessage


@dataclass_json
@dataclass
class DirectMessageConfiguration:
    adm_message: Optional[admmessage.AdmMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ADMMessage' }})
    apns_message: Optional[apnsmessage.ApnsMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'APNSMessage' }})
    baidu_message: Optional[baidumessage.BaiduMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaiduMessage' }})
    default_message: Optional[defaultmessage.DefaultMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultMessage' }})
    default_push_notification_message: Optional[defaultpushnotificationmessage.DefaultPushNotificationMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultPushNotificationMessage' }})
    email_message: Optional[emailmessage.EmailMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmailMessage' }})
    gcm_message: Optional[gcmmessage.GcmMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GCMMessage' }})
    sms_message: Optional[smsmessage.SmsMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SMSMessage' }})
    voice_message: Optional[voicemessage.VoiceMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoiceMessage' }})
    
