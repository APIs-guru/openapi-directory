from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import objectexpiration
from . import filekey
from . import userkeypaircontainer


@dataclass_json
@dataclass
class CreateDownloadShareRequest:
    creator_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creatorLanguage' }})
    expiration: Optional[objectexpiration.ObjectExpiration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration' }})
    file_key: Optional[filekey.FileKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileKey' }})
    internal_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internalNotes' }})
    key_pair: Optional[userkeypaircontainer.UserKeyPairContainer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyPair' }})
    mail_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mailBody' }})
    mail_recipients: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mailRecipients' }})
    mail_subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mailSubject' }})
    max_downloads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDownloads' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeId' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    notify_creator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifyCreator' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    receiver_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receiverLanguage' }})
    send_mail: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sendMail' }})
    send_sms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sendSms' }})
    show_creator_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showCreatorName' }})
    show_creator_username: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showCreatorUsername' }})
    sms_recipients: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smsRecipients' }})
    text_message_recipients: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textMessageRecipients' }})
    
