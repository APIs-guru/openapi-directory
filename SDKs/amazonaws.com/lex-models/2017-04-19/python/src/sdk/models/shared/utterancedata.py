from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UtteranceData:
    r"""UtteranceData
    Provides information about a single utterance that was made to your bot. 
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    distinct_users: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distinctUsers') }})
    first_uttered_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstUtteredDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_uttered_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUtteredDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    utterance_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utteranceString') }})
    
