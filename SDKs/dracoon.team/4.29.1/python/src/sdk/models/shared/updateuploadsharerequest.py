from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateUploadShareRequest:
    r"""UpdateUploadShareRequest
    Request model for updating an Upload Share
    """
    
    default_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultCountry') }})
    expiration: Optional[ObjectExpiration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration') }})
    files_expiry_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesExpiryPeriod') }})
    internal_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalNotes') }})
    max_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSize') }})
    max_slots: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSlots') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    notify_creator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifyCreator') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    receiver_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receiverLanguage') }})
    reset_files_expiry_period: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetFilesExpiryPeriod') }})
    reset_max_size: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetMaxSize') }})
    reset_max_slots: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetMaxSlots') }})
    reset_password: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetPassword') }})
    show_creator_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showCreatorName') }})
    show_creator_username: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showCreatorUsername') }})
    show_uploaded_files: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showUploadedFiles') }})
    text_message_recipients: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textMessageRecipients') }})
    
