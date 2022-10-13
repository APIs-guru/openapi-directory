from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EndpointConfigSummary:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    endpoint_config_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointConfigArn' }})
    endpoint_config_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointConfigName' }})
    
