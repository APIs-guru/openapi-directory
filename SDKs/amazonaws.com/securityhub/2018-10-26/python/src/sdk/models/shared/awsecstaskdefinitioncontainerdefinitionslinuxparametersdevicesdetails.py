from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails:
    r"""AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails
    A host device to expose to the container.
    """
    
    container_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainerPath') }})
    host_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HostPath') }})
    permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permissions') }})
    
