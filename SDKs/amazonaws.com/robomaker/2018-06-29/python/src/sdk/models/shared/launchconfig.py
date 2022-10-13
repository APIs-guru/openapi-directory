from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import portforwardingconfig


@dataclass_json
@dataclass
class LaunchConfig:
    environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentVariables' }})
    launch_file: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchFile' }})
    package_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageName' }})
    port_forwarding_config: Optional[portforwardingconfig.PortForwardingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portForwardingConfig' }})
    stream_ui: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamUI' }})
    
