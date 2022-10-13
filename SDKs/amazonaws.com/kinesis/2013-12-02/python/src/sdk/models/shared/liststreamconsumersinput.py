from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListStreamConsumersInput:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    stream_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamARN' }})
    stream_creation_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamCreationTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
