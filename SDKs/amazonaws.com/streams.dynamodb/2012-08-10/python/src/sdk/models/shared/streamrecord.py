from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import attributevalue
from . import attributevalue
from . import attributevalue
from . import streamviewtype_enum


@dataclass_json
@dataclass
class StreamRecord:
    approximate_creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApproximateCreationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    keys: Optional[dict[str, attributevalue.AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Keys' }})
    new_image: Optional[dict[str, attributevalue.AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NewImage' }})
    old_image: Optional[dict[str, attributevalue.AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OldImage' }})
    sequence_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SequenceNumber' }})
    size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizeBytes' }})
    stream_view_type: Optional[streamviewtype_enum.StreamViewTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamViewType' }})
    
