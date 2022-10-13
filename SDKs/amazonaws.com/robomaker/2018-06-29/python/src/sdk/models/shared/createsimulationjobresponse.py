from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import computeresponse
from . import datasource
from . import failurebehavior_enum
from . import simulationjoberrorcode_enum
from . import loggingconfig
from . import outputlocation
from . import robotapplicationconfig
from . import simulationapplicationconfig
from . import simulationjobstatus_enum
from . import vpcconfigresponse


@dataclass_json
@dataclass
class CreateSimulationJobResponse:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    compute: Optional[computeresponse.ComputeResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compute' }})
    data_sources: Optional[List[datasource.DataSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSources' }})
    failure_behavior: Optional[failurebehavior_enum.FailureBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureBehavior' }})
    failure_code: Optional[simulationjoberrorcode_enum.SimulationJobErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureCode' }})
    iam_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamRole' }})
    last_started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastStartedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    logging_config: Optional[loggingconfig.LoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loggingConfig' }})
    max_job_duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxJobDurationInSeconds' }})
    output_location: Optional[outputlocation.OutputLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputLocation' }})
    robot_applications: Optional[List[robotapplicationconfig.RobotApplicationConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'robotApplications' }})
    simulation_applications: Optional[List[simulationapplicationconfig.SimulationApplicationConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simulationApplications' }})
    simulation_time_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simulationTimeMillis' }})
    status: Optional[simulationjobstatus_enum.SimulationJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    vpc_config: Optional[vpcconfigresponse.VpcConfigResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcConfig' }})
    
