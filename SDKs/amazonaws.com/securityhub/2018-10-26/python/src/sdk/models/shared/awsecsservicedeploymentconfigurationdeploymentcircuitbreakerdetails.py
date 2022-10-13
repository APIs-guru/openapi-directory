from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails:
    enable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enable' }})
    rollback: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rollback' }})
    
