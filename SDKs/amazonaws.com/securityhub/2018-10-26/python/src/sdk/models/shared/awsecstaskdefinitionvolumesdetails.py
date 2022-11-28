from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionVolumesDetails:
    r"""AwsEcsTaskDefinitionVolumesDetails
    A data volume to mount from another container.
    """
    
    docker_volume_configuration: Optional[AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DockerVolumeConfiguration') }})
    efs_volume_configuration: Optional[AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EfsVolumeConfiguration') }})
    host: Optional[AwsEcsTaskDefinitionVolumesHostDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Host') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
