from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DeletedNodeSummaryTypeEnum(str, Enum):
    FOLDER = "folder"
    FILE = "file"


@dataclass_json
@dataclass
class DeletedNodeSummary:
    cnt_versions: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cntVersions' }})
    first_deleted_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstDeletedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_deleted_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastDeletedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_deleted_node_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastDeletedNodeId' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentId' }})
    parent_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentPath' }})
    timestamp_creation: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampCreation', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timestamp_modification: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampModification', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: DeletedNodeSummaryTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
