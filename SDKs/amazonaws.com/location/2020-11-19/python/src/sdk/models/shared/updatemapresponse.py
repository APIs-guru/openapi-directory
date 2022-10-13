from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateMapResponse:
    map_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MapArn' }})
    map_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MapName' }})
    update_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
