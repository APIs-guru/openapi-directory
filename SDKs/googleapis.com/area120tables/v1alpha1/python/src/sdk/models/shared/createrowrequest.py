from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import row

class CreateRowRequestViewEnum(str, Enum):
    VIEW_UNSPECIFIED = "VIEW_UNSPECIFIED"
    COLUMN_ID_VIEW = "COLUMN_ID_VIEW"


@dataclass_json
@dataclass
class CreateRowRequest:
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    row: Optional[row.Row] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row' }})
    view: Optional[CreateRowRequestViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    
