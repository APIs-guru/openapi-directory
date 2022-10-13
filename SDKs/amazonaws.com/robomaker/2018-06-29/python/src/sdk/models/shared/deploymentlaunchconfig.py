from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeploymentLaunchConfig:
    environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentVariables' }})
    launch_file: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchFile' }})
    package_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageName' }})
    post_launch_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postLaunchFile' }})
    pre_launch_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preLaunchFile' }})
    
