from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StarredRepository:
    r"""StarredRepository
    Starred Repository
    """
    
    repo: Repository = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    starred_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
