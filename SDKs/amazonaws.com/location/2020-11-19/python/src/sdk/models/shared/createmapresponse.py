from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateMapResponse:
    create_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    map_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MapArn' }})
    map_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MapName' }})
    
