from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDownloadShareRequest:
    r"""CreateDownloadShareRequest
    Request model for creating a Download Share
    """
    
    node_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeId') }})
    creator_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorLanguage') }})
    expiration: Optional[ObjectExpiration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration') }})
    file_key: Optional[FileKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileKey') }})
    internal_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalNotes') }})
    key_pair: Optional[UserKeyPairContainer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPair') }})
    mail_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailBody') }})
    mail_recipients: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailRecipients') }})
    mail_subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailSubject') }})
    max_downloads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDownloads') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    notify_creator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifyCreator') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    receiver_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receiverLanguage') }})
    send_mail: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendMail') }})
    send_sms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendSms') }})
    show_creator_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showCreatorName') }})
    show_creator_username: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showCreatorUsername') }})
    sms_recipients: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smsRecipients') }})
    text_message_recipients: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textMessageRecipients') }})
    
