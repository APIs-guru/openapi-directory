from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InteractionLimitResponse:
    r"""InteractionLimitResponse
    Interaction limit settings.
    """
    
    expires_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    limit: InteractionGroupEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    origin: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    
