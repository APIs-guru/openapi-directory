from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class UpdateRowRequestViewEnum(str, Enum):
    VIEW_UNSPECIFIED = "VIEW_UNSPECIFIED"
    COLUMN_ID_VIEW = "COLUMN_ID_VIEW"


@dataclass_json
@dataclass
class UpdateRowRequest:
    r"""UpdateRowRequest
    Request message for TablesService.UpdateRow.
    """
    
    row: Optional[Row] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row') }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    view: Optional[UpdateRowRequestViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    
