from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import publicuploadedfiledata
from . import useruserpublickeylist


@dataclass_json
@dataclass
class PublicUploadShare:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creator_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creatorName' }})
    creator_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creatorUsername' }})
    expire_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEncrypted' }})
    is_protected: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isProtected' }})
    max_size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSize' }})
    max_slots: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSlots' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    remaining_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remainingSize' }})
    remaining_slots: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remainingSlots' }})
    show_uploaded_files: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showUploadedFiles' }})
    uploaded_files: Optional[List[publicuploadedfiledata.PublicUploadedFileData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadedFiles' }})
    user_user_public_key_list: Optional[useruserpublickeylist.UserUserPublicKeyList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userUserPublicKeyList' }})
    
