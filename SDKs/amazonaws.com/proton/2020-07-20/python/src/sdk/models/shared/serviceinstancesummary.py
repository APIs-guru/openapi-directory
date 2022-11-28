from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceInstanceSummary:
    r"""ServiceInstanceSummary
    A summary of the service instance detail data.
    """
    
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployment_status: DeploymentStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentStatus') }})
    environment_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentName') }})
    last_deployment_attempted_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastDeploymentAttemptedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_deployment_succeeded_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastDeploymentSucceededAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    template_major_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateMajorVersion') }})
    template_minor_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateMinorVersion') }})
    template_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateName') }})
    deployment_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentStatusMessage') }})
    
