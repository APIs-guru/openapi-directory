from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import appvalidationoutput
from . import servervalidationoutput
from . import validationstatus_enum


@dataclass_json
@dataclass
class ValidationOutput:
    app_validation_output: Optional[appvalidationoutput.AppValidationOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appValidationOutput' }})
    latest_validation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestValidationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    server_validation_output: Optional[servervalidationoutput.ServerValidationOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverValidationOutput' }})
    status: Optional[validationstatus_enum.ValidationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMessage' }})
    validation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationId' }})
    
