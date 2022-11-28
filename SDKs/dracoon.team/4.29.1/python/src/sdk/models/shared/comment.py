from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Comment:
    r"""Comment
    Node comment information
    """
    
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: UserInfo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_changed: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isChanged') }})
    is_deleted: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDeleted') }})
    text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: UserInfo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    
