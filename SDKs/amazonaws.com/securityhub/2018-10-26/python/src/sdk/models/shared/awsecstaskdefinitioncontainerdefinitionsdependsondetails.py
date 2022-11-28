from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails:
    r"""AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails
    A dependency that is defined for container startup and shutdown.
    """
    
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Condition') }})
    container_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainerName') }})
    
