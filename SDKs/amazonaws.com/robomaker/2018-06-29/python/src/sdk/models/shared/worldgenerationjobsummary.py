from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import worldgenerationjobstatus_enum
from . import worldcount


@dataclass_json
@dataclass
class WorldGenerationJobSummary:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failed_world_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedWorldCount' }})
    status: Optional[worldgenerationjobstatus_enum.WorldGenerationJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    succeeded_world_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'succeededWorldCount' }})
    template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    world_count: Optional[worldcount.WorldCount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'worldCount' }})
    
