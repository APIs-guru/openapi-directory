from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import constraints
from . import playercontext


@dataclass_json
@dataclass
class Session:
    constraints: constraints.Constraints = field(default=None, metadata={'dataclasses_json': { 'field_name': 'constraints' }})
    deadline: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deadline', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    player_context: Optional[playercontext.PlayerContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playerContext' }})
    requested: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requested', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
