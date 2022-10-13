from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import row

class UpdateRowRequestViewEnum(str, Enum):
    VIEW_UNSPECIFIED = "VIEW_UNSPECIFIED"
    COLUMN_ID_VIEW = "COLUMN_ID_VIEW"


@dataclass_json
@dataclass
class UpdateRowRequest:
    row: Optional[row.Row] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    view: Optional[UpdateRowRequestViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    
