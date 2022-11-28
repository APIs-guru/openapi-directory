from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BuildSummary:
    added_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    build_num: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_num') }})
    outcome: Optional[OutcomeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outcome') }})
    pushed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pushed_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    vcs_revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcs_revision') }})
    
