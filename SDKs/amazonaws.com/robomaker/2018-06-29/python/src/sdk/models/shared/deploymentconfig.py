from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeploymentConfig:
    r"""DeploymentConfig
    Information about a deployment configuration.
    """
    
    concurrent_deployment_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concurrentDeploymentPercentage') }})
    download_condition_file: Optional[S3Object] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadConditionFile') }})
    failure_threshold_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureThresholdPercentage') }})
    robot_deployment_timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('robotDeploymentTimeoutInSeconds') }})
    
