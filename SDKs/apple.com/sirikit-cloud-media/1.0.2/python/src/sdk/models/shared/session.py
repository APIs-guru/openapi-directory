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
class Session:
    constraints: Constraints = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraints') }})
    deadline: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deadline'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    requested: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requested'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    player_context: Optional[PlayerContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playerContext') }})
    
