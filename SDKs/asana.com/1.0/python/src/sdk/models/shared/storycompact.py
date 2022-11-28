from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StoryCompact:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[UserCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    resource_subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_subtype') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
