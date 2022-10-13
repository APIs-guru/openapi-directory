from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import deploymentlaunchconfig


@dataclass_json
@dataclass
class DeploymentApplicationConfig:
    application: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application' }})
    application_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationVersion' }})
    launch_config: deploymentlaunchconfig.DeploymentLaunchConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchConfig' }})
    
