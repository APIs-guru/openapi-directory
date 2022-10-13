from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import userinfo
from . import userinfo
from . import userinfo

class DeletedNodeTypeEnum(str, Enum):
    FOLDER = "folder"
    FILE = "file"


@dataclass_json
@dataclass
class DeletedNode:
    accessed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    classification: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classification' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[userinfo.UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    deleted_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted_by: Optional[userinfo.UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletedBy' }})
    expire_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEncrypted' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    parent_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentId' }})
    parent_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentPath' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    type: DeletedNodeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[userinfo.UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy' }})
    
