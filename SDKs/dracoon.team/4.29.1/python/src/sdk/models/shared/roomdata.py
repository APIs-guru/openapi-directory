from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import roomdata
from . import userinfo
from . import nodepermissions
from . import userinfo

class RoomDataTypeEnum(str, Enum):
    ROOM = "room"


@dataclass_json
@dataclass
class RoomData:
    children: Optional[List[roomdata.RoomData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'children' }})
    cnt_admins: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cntAdmins' }})
    cnt_download_shares: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cntDownloadShares' }})
    cnt_upload_shares: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cntUploadShares' }})
    cnt_users: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cntUsers' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[userinfo.UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    has_recycle_bin: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasRecycleBin' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_encrypted: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEncrypted' }})
    is_favorite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isFavorite' }})
    is_granted: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isGranted' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentId' }})
    permissions: Optional[nodepermissions.NodePermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quota' }})
    recycle_bin_retention_period: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recycleBinRetentionPeriod' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    type: Optional[RoomDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[userinfo.UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy' }})
    
