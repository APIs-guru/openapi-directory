from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails:
    r"""AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails
    The container path, mount options, and size (in MiB) of a tmpfs mount.
    """
    
    container_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainerPath') }})
    mount_options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MountOptions') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Size') }})
    
