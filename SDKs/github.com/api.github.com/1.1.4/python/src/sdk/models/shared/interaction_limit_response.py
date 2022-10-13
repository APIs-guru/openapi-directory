from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum
from dataclasses_json import dataclass_json
from . import interaction_group_enum


@dataclass_json
@dataclass
class InteractionLimitResponse:
    expires_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    limit: interaction_group_enum.InteractionGroupEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    origin: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origin' }})
    
