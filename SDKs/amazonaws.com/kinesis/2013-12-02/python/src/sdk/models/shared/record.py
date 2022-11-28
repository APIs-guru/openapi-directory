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
class Record:
    r"""Record
    The unit of data of the Kinesis data stream, which is composed of a sequence number, a partition key, and a data blob.
    """
    
    data: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    partition_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionKey') }})
    sequence_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SequenceNumber') }})
    approximate_arrival_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApproximateArrivalTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    encryption_type: Optional[EncryptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionType') }})
    
