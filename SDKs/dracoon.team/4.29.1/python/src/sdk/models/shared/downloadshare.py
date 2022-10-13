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
class DownloadShare:
    access_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessKey' }})
    classification: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classification' }})
    cnt_downloads: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cntDownloads' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: userinfo.UserInfo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    data_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataUrl' }})
    expire_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    internal_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internalNotes' }})
    is_encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEncrypted' }})
    is_protected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isProtected' }})
    max_downloads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDownloads' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeId' }})
    node_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodePath' }})
    node_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeType' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    notify_creator: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifyCreator' }})
    recipients: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipients' }})
    show_creator_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showCreatorName' }})
    show_creator_username: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showCreatorUsername' }})
    sms_recipients: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smsRecipients' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[userinfo.UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy' }})
    
