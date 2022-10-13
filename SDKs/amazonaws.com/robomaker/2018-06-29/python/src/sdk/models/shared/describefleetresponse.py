from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import deploymentstatus_enum
from . import robot


@dataclass_json
@dataclass
class DescribeFleetResponse:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_deployment_job: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastDeploymentJob' }})
    last_deployment_status: Optional[deploymentstatus_enum.DeploymentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastDeploymentStatus' }})
    last_deployment_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastDeploymentTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    robots: Optional[List[robot.Robot]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'robots' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
