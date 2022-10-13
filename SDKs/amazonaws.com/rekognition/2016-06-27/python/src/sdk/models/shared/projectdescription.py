from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import projectstatus_enum


@dataclass_json
@dataclass
class ProjectDescription:
    creation_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    project_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectArn' }})
    status: Optional[projectstatus_enum.ProjectStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
