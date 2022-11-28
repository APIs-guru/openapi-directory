from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails:
    r"""AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails
    Information about a Docker volume.
    """
    
    autoprovision: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Autoprovision') }})
    driver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Driver') }})
    driver_opts: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DriverOpts') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Labels') }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Scope') }})
    
