from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deploymentstatus_enum


@dataclass_json
@dataclass
class ServiceInstanceSummary:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployment_status: deploymentstatus_enum.DeploymentStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentStatus' }})
    deployment_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentStatusMessage' }})
    environment_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentName' }})
    last_deployment_attempted_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastDeploymentAttemptedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_deployment_succeeded_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastDeploymentSucceededAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    service_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    template_major_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateMajorVersion' }})
    template_minor_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateMinorVersion' }})
    template_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateName' }})
    
