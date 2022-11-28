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
class DownloadShare:
    r"""DownloadShare
    Download Share information
    """
    
    access_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessKey') }})
    cnt_downloads: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cntDownloads') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: UserInfo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeId') }})
    notify_creator: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifyCreator') }})
    classification: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    data_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataUrl') }})
    expire_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    internal_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalNotes') }})
    is_encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEncrypted') }})
    is_protected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isProtected') }})
    max_downloads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDownloads') }})
    node_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodePath') }})
    node_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeType') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    recipients: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipients') }})
    show_creator_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showCreatorName') }})
    show_creator_username: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showCreatorUsername') }})
    sms_recipients: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smsRecipients') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[UserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    
