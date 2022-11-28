from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DeletedNodeSummaryTypeEnum(str, Enum):
    FOLDER = "folder"
    FILE = "file"


@dataclass_json
@dataclass
class DeletedNodeSummary:
    r"""DeletedNodeSummary
    Deleted node information (Deleted node can be a folder or file)
    """
    
    cnt_versions: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cntVersions') }})
    first_deleted_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstDeletedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_deleted_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastDeletedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_deleted_node_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastDeletedNodeId') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentId') }})
    parent_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentPath') }})
    type: DeletedNodeSummaryTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    timestamp_creation: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampCreation'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timestamp_modification: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampModification'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
