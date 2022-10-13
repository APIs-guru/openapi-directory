from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CloudBuildOptions:
    app_yaml_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appYamlPath' }})
    cloud_build_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudBuildTimeout' }})
    
