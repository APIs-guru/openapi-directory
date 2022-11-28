from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails:
    r"""AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails
    Determines whether a service deployment fails if a service cannot reach a steady state.
    """
    
    enable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enable') }})
    rollback: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rollback') }})
    
