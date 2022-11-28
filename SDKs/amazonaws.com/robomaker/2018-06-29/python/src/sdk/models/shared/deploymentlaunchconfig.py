from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeploymentLaunchConfig:
    r"""DeploymentLaunchConfig
    Configuration information for a deployment launch.
    """
    
    launch_file: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchFile') }})
    package_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    post_launch_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postLaunchFile') }})
    pre_launch_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preLaunchFile') }})
    
