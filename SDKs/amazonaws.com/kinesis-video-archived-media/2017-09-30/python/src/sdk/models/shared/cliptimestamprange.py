from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ClipTimestampRange:
    r"""ClipTimestampRange
    The range of timestamps for which to return fragments.
    """
    
    end_timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTimestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTimestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
