from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SimulationJobRequest:
    r"""SimulationJobRequest
    Information about a simulation job request.
    """
    
    max_job_duration_in_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxJobDurationInSeconds') }})
    compute: Optional[Compute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compute') }})
    data_sources: Optional[List[DataSourceConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSources') }})
    failure_behavior: Optional[FailureBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureBehavior') }})
    iam_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamRole') }})
    logging_config: Optional[LoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingConfig') }})
    output_location: Optional[OutputLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputLocation') }})
    robot_applications: Optional[List[RobotApplicationConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('robotApplications') }})
    simulation_applications: Optional[List[SimulationApplicationConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simulationApplications') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    use_default_applications: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useDefaultApplications') }})
    vpc_config: Optional[VpcConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConfig') }})
    
