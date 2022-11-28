from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SessionContextAttributes:
    r"""SessionContextAttributes
    Provides information about the context in which temporary security credentials were issued to an entity.
    """
    
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mfa_authenticated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mfaAuthenticated') }})
    
