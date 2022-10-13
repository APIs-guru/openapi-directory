from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Fragment:
    fragment_length_in_milliseconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FragmentLengthInMilliseconds' }})
    fragment_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FragmentNumber' }})
    fragment_size_in_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FragmentSizeInBytes' }})
    producer_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProducerTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    server_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
