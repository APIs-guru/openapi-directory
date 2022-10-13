from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum
from dataclasses_json import dataclass_json
from . import consumerstatus_enum


@dataclass_json
@dataclass
class Consumer:
    consumer_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumerARN' }})
    consumer_creation_timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumerCreationTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    consumer_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumerName' }})
    consumer_status: consumerstatus_enum.ConsumerStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumerStatus' }})
    
