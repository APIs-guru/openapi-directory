from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class NodeTypeEnum(str, Enum):
    ROOM = "room"
    FOLDER = "folder"
    FILE = "file"


@dataclass_json
@dataclass
class Node:
    r"""Node
    Node information (Node can be a room, folder or file)
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: NodeTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    auth_parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authParentId') }})
    branch_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchVersion') }})
    children: Optional[List[Node]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('children') }})
    classification: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    cnt_admins: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cntAdmins') }})
    cnt_children: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cntChildren') }})
    cnt_comments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cntComments') }})
    cnt_deleted_versions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cntDeletedVersions') }})
    cnt_download_shares: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cntDownloadShares') }})
    cnt_files: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cntFiles') }})
    cnt_folders: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cntFolders') }})
    cnt_rooms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cntRooms') }})
    cnt_upload_shares: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cntUploadShares') }})
    cnt_users: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cntUsers') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[UserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    encryption_info: Optional[EncryptionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionInfo') }})
    expire_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    file_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileType') }})
    has_activities_log: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasActivitiesLog') }})
    has_recycle_bin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasRecycleBin') }})
    hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hash') }})
    inherit_permissions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inheritPermissions') }})
    is_browsable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isBrowsable') }})
    is_encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEncrypted') }})
    is_favorite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFavorite') }})
    media_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaToken') }})
    media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaType') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentId') }})
    parent_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentPath') }})
    permissions: Optional[NodePermissions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quota') }})
    recycle_bin_retention_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recycleBinRetentionPeriod') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    timestamp_creation: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampCreation'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timestamp_modification: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampModification'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[UserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    
