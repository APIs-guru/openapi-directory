from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import projectstatus_enum


@dataclass_json
@dataclass
class ProjectSummary:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    project_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectArn' }})
    project_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectDescription' }})
    project_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectId' }})
    project_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectName' }})
    project_status: projectstatus_enum.ProjectStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectStatus' }})
    
