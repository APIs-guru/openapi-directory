from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import launchconfig
from . import tool
from . import uploadconfiguration
from . import worldconfig


@dataclass_json
@dataclass
class SimulationApplicationConfig:
    application: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application' }})
    application_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationVersion' }})
    launch_config: launchconfig.LaunchConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchConfig' }})
    tools: Optional[List[tool.Tool]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tools' }})
    upload_configurations: Optional[List[uploadconfiguration.UploadConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadConfigurations' }})
    use_default_tools: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useDefaultTools' }})
    use_default_upload_configurations: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useDefaultUploadConfigurations' }})
    world_configs: Optional[List[worldconfig.WorldConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'worldConfigs' }})
    
