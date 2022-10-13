from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awsecsservicedeploymentconfigurationdeploymentcircuitbreakerdetails


@dataclass_json
@dataclass
class AwsEcsServiceDeploymentConfigurationDetails:
    deployment_circuit_breaker: Optional[awsecsservicedeploymentconfigurationdeploymentcircuitbreakerdetails.AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentCircuitBreaker' }})
    maximum_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumPercent' }})
    minimum_healthy_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumHealthyPercent' }})
    
