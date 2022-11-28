from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LaunchConfig:
    r"""LaunchConfig
    Information about a launch configuration.
    """
    
    launch_file: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchFile') }})
    package_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    port_forwarding_config: Optional[PortForwardingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portForwardingConfig') }})
    stream_ui: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamUI') }})
    
