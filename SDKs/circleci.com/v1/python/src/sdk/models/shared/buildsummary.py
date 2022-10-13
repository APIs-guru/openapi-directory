from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import outcome_enum
from . import status_enum


@dataclass_json
@dataclass
class BuildSummary:
    added_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    build_num: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_num' }})
    outcome: Optional[outcome_enum.OutcomeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outcome' }})
    pushed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pushed_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[status_enum.StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    vcs_revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcs_revision' }})
    
