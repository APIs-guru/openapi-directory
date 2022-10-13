from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import userinfo
from . import userinfo


@dataclass_json
@dataclass
class UploadShare:
    access_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessKey' }})
    cnt_files: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cntFiles' }})
    cnt_uploads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cntUploads' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: userinfo.UserInfo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    data_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataUrl' }})
    expire_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    files_expiry_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filesExpiryPeriod' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    internal_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internalNotes' }})
    is_encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEncrypted' }})
    is_protected: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isProtected' }})
    max_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSize' }})
    max_slots: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSlots' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    notify_creator: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifyCreator' }})
    recipients: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipients' }})
    show_creator_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showCreatorName' }})
    show_creator_username: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showCreatorUsername' }})
    show_uploaded_files: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showUploadedFiles' }})
    sms_recipients: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smsRecipients' }})
    target_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetId' }})
    target_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetPath' }})
    target_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetType' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[userinfo.UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy' }})
    
