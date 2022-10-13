from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import containerstatus_enum


@dataclass_json
@dataclass
class Container:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ARN' }})
    access_logging_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessLoggingEnabled' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Endpoint' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    status: Optional[containerstatus_enum.ContainerStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
