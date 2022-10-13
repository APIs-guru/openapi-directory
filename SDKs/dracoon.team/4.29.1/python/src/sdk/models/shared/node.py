from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import node
from . import userinfo
from . import encryptioninfo
from . import nodepermissions
from . import userinfo

class NodeTypeEnum(str, Enum):
    ROOM = "room"
    FOLDER = "folder"
    FILE = "file"


@dataclass_json
@dataclass
class Node:
    auth_parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authParentId' }})
    branch_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchVersion' }})
    children: Optional[List[node.Node]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'children' }})
    classification: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classification' }})
    cnt_admins: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cntAdmins' }})
    cnt_children: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cntChildren' }})
    cnt_comments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cntComments' }})
    cnt_deleted_versions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cntDeletedVersions' }})
    cnt_download_shares: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cntDownloadShares' }})
    cnt_files: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cntFiles' }})
    cnt_folders: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cntFolders' }})
    cnt_rooms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cntRooms' }})
    cnt_upload_shares: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cntUploadShares' }})
    cnt_users: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cntUsers' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[userinfo.UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    encryption_info: Optional[encryptioninfo.EncryptionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionInfo' }})
    expire_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    file_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileType' }})
    has_activities_log: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasActivitiesLog' }})
    has_recycle_bin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasRecycleBin' }})
    hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hash' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    inherit_permissions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inheritPermissions' }})
    is_browsable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isBrowsable' }})
    is_encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEncrypted' }})
    is_favorite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isFavorite' }})
    media_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaToken' }})
    media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaType' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentId' }})
    parent_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentPath' }})
    permissions: Optional[nodepermissions.NodePermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quota' }})
    recycle_bin_retention_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recycleBinRetentionPeriod' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    timestamp_creation: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampCreation', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timestamp_modification: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampModification', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: NodeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[userinfo.UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy' }})
    
