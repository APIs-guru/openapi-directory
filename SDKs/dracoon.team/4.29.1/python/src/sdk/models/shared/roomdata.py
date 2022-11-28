from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RoomDataTypeEnum(str, Enum):
    ROOM = "room"


@dataclass_json
@dataclass
class RoomData:
    r"""RoomData
    Room information
    """
    
    has_recycle_bin: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasRecycleBin') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_encrypted: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEncrypted') }})
    is_granted: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isGranted') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    recycle_bin_retention_period: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recycleBinRetentionPeriod') }})
    children: Optional[List[RoomData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('children') }})
    cnt_admins: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cntAdmins') }})
    cnt_download_shares: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cntDownloadShares') }})
    cnt_upload_shares: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cntUploadShares') }})
    cnt_users: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cntUsers') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[UserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    is_favorite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFavorite') }})
    parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentId') }})
    permissions: Optional[NodePermissions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quota') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    type: Optional[RoomDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[UserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    
