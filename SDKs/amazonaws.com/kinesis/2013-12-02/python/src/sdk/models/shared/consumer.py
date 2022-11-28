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
class Consumer:
    r"""Consumer
    An object that represents the details of the consumer you registered. This type of object is returned by <a>RegisterStreamConsumer</a>.
    """
    
    consumer_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumerARN') }})
    consumer_creation_timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumerCreationTimestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    consumer_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumerName') }})
    consumer_status: ConsumerStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumerStatus') }})
    
