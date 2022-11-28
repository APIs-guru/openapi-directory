from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UploadShare:
    r"""UploadShare
    Upload Share information
    """
    
    access_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessKey') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: UserInfo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_protected: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isProtected') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notify_creator: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifyCreator') }})
    target_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetId') }})
    cnt_files: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cntFiles') }})
    cnt_uploads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cntUploads') }})
    data_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataUrl') }})
    expire_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    files_expiry_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesExpiryPeriod') }})
    internal_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalNotes') }})
    is_encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEncrypted') }})
    max_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSize') }})
    max_slots: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSlots') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    recipients: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipients') }})
    show_creator_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showCreatorName') }})
    show_creator_username: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showCreatorUsername') }})
    show_uploaded_files: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showUploadedFiles') }})
    sms_recipients: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smsRecipients') }})
    target_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetPath') }})
    target_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetType') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[UserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    
