from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import objectexpiration


@dataclass_json
@dataclass
class CreateUploadShareRequest:
    creator_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creatorLanguage' }})
    expiration: Optional[objectexpiration.ObjectExpiration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration' }})
    files_expiry_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filesExpiryPeriod' }})
    internal_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internalNotes' }})
    mail_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mailBody' }})
    mail_recipients: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mailRecipients' }})
    mail_subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mailSubject' }})
    max_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSize' }})
    max_slots: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSlots' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    notify_creator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifyCreator' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    receiver_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receiverLanguage' }})
    send_mail: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sendMail' }})
    send_sms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sendSms' }})
    show_creator_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showCreatorName' }})
    show_creator_username: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showCreatorUsername' }})
    show_uploaded_files: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showUploadedFiles' }})
    sms_recipients: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smsRecipients' }})
    target_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetId' }})
    text_message_recipients: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textMessageRecipients' }})
    
