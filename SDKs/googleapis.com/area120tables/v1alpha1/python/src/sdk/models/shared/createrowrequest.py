from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CreateRowRequestViewEnum(str, Enum):
    VIEW_UNSPECIFIED = "VIEW_UNSPECIFIED"
    COLUMN_ID_VIEW = "COLUMN_ID_VIEW"


@dataclass_json
@dataclass
class CreateRowRequest:
    r"""CreateRowRequest
    Request message for TablesService.CreateRow.
    """
    
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    row: Optional[Row] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row') }})
    view: Optional[CreateRowRequestViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    
