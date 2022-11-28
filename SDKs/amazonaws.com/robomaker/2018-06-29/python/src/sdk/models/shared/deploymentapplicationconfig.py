from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeploymentApplicationConfig:
    r"""DeploymentApplicationConfig
    Information about a deployment application configuration.
    """
    
    application: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application') }})
    application_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationVersion') }})
    launch_config: DeploymentLaunchConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchConfig') }})
    
