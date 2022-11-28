from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeDeploymentJobResponse:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployment_application_configs: Optional[List[DeploymentApplicationConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentApplicationConfigs') }})
    deployment_config: Optional[DeploymentConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfig') }})
    failure_code: Optional[DeploymentJobErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCode') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    fleet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleet') }})
    robot_deployment_summary: Optional[List[RobotDeployment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('robotDeploymentSummary') }})
    status: Optional[DeploymentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
