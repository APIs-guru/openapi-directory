from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import objectexpiration


@dataclass_json
@dataclass
class UpdateDownloadShareRequest:
    default_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultCountry' }})
    expiration: Optional[objectexpiration.ObjectExpiration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration' }})
    internal_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internalNotes' }})
    max_downloads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDownloads' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    notify_creator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifyCreator' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    receiver_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receiverLanguage' }})
    reset_max_downloads: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resetMaxDownloads' }})
    reset_password: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resetPassword' }})
    show_creator_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showCreatorName' }})
    show_creator_username: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showCreatorUsername' }})
    text_message_recipients: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textMessageRecipients' }})
    
