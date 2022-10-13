from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import worldgenerationjoberrorcode_enum
from . import finishedworldssummary
from . import worldgenerationjobstatus_enum
from . import worldcount


@dataclass_json
@dataclass
class DescribeWorldGenerationJobResponse:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_code: Optional[worldgenerationjoberrorcode_enum.WorldGenerationJobErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureCode' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    finished_worlds_summary: Optional[finishedworldssummary.FinishedWorldsSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finishedWorldsSummary' }})
    status: Optional[worldgenerationjobstatus_enum.WorldGenerationJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    world_count: Optional[worldcount.WorldCount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'worldCount' }})
    world_tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'worldTags' }})
    
