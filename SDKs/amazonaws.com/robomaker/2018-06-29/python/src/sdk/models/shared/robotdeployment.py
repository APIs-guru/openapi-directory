from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deploymentjoberrorcode_enum
from . import progressdetail
from . import robotstatus_enum


@dataclass_json
@dataclass
class RobotDeployment:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    deployment_finish_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentFinishTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployment_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_code: Optional[deploymentjoberrorcode_enum.DeploymentJobErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureCode' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    progress_detail: Optional[progressdetail.ProgressDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progressDetail' }})
    status: Optional[robotstatus_enum.RobotStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
