from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Fragment:
    r"""Fragment
    Represents a segment of video or other time-delimited data.
    """
    
    fragment_length_in_milliseconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FragmentLengthInMilliseconds') }})
    fragment_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FragmentNumber') }})
    fragment_size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FragmentSizeInBytes') }})
    producer_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProducerTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    server_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
