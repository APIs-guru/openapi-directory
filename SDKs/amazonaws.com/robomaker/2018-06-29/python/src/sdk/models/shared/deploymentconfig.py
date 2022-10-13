from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import s3object


@dataclass_json
@dataclass
class DeploymentConfig:
    concurrent_deployment_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concurrentDeploymentPercentage' }})
    download_condition_file: Optional[s3object.S3Object] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadConditionFile' }})
    failure_threshold_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureThresholdPercentage' }})
    robot_deployment_timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'robotDeploymentTimeoutInSeconds' }})
    
