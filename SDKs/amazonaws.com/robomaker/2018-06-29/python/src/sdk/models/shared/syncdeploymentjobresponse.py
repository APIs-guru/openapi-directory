from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import deploymentapplicationconfig
from . import deploymentconfig
from . import deploymentjoberrorcode_enum
from . import deploymentstatus_enum


@dataclass_json
@dataclass
class SyncDeploymentJobResponse:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployment_application_configs: Optional[List[deploymentapplicationconfig.DeploymentApplicationConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentApplicationConfigs' }})
    deployment_config: Optional[deploymentconfig.DeploymentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentConfig' }})
    failure_code: Optional[deploymentjoberrorcode_enum.DeploymentJobErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureCode' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    fleet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fleet' }})
    status: Optional[deploymentstatus_enum.DeploymentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
