from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import worldexportjoberrorcode_enum
from . import outputlocation
from . import worldexportjobstatus_enum


@dataclass_json
@dataclass
class CreateWorldExportJobResponse:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_code: Optional[worldexportjoberrorcode_enum.WorldExportJobErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureCode' }})
    iam_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamRole' }})
    output_location: Optional[outputlocation.OutputLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputLocation' }})
    status: Optional[worldexportjobstatus_enum.WorldExportJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
