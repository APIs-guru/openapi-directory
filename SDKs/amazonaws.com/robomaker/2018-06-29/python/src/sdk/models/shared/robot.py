from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import architecture_enum
from . import robotstatus_enum


@dataclass_json
@dataclass
class Robot:
    architecture: Optional[architecture_enum.ArchitectureEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'architecture' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fleet_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fleetArn' }})
    green_grass_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'greenGrassGroupId' }})
    last_deployment_job: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastDeploymentJob' }})
    last_deployment_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastDeploymentTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[robotstatus_enum.RobotStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
