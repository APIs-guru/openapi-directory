from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsEcsServiceDeploymentConfigurationDetails:
    r"""AwsEcsServiceDeploymentConfigurationDetails
    Optional deployment parameters for the service.
    """
    
    deployment_circuit_breaker: Optional[AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentCircuitBreaker') }})
    maximum_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumPercent') }})
    minimum_healthy_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumHealthyPercent') }})
    
