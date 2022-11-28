from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StreamRecord:
    r"""StreamRecord
    A description of a single data modification that was performed on an item in a DynamoDB table.
    """
    
    approximate_creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApproximateCreationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    keys: Optional[dict[str, AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keys') }})
    new_image: Optional[dict[str, AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewImage') }})
    old_image: Optional[dict[str, AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OldImage') }})
    sequence_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SequenceNumber') }})
    size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SizeBytes') }})
    stream_view_type: Optional[StreamViewTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamViewType') }})
    
