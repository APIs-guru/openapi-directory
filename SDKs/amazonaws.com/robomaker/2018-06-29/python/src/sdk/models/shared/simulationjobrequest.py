from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import compute
from . import datasourceconfig
from . import failurebehavior_enum
from . import loggingconfig
from . import outputlocation
from . import robotapplicationconfig
from . import simulationapplicationconfig
from . import vpcconfig


@dataclass_json
@dataclass
class SimulationJobRequest:
    compute: Optional[compute.Compute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compute' }})
    data_sources: Optional[List[datasourceconfig.DataSourceConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSources' }})
    failure_behavior: Optional[failurebehavior_enum.FailureBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureBehavior' }})
    iam_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamRole' }})
    logging_config: Optional[loggingconfig.LoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loggingConfig' }})
    max_job_duration_in_seconds: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxJobDurationInSeconds' }})
    output_location: Optional[outputlocation.OutputLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputLocation' }})
    robot_applications: Optional[List[robotapplicationconfig.RobotApplicationConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'robotApplications' }})
    simulation_applications: Optional[List[simulationapplicationconfig.SimulationApplicationConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simulationApplications' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    use_default_applications: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useDefaultApplications' }})
    vpc_config: Optional[vpcconfig.VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcConfig' }})
    
