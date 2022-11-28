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
class SimulationJob:
    r"""SimulationJob
    Information about a simulation job.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    compute: Optional[ComputeResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compute') }})
    data_sources: Optional[List[DataSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSources') }})
    failure_behavior: Optional[FailureBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureBehavior') }})
    failure_code: Optional[SimulationJobErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCode') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    iam_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamRole') }})
    last_started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastStartedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    logging_config: Optional[LoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingConfig') }})
    max_job_duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxJobDurationInSeconds') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_interface: Optional[NetworkInterface] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInterface') }})
    output_location: Optional[OutputLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputLocation') }})
    robot_applications: Optional[List[RobotApplicationConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('robotApplications') }})
    simulation_applications: Optional[List[SimulationApplicationConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simulationApplications') }})
    simulation_time_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simulationTimeMillis') }})
    status: Optional[SimulationJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    vpc_config: Optional[VpcConfigResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConfig') }})
    
