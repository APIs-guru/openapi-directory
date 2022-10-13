from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails:
    autoprovision: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Autoprovision' }})
    driver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Driver' }})
    driver_opts: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DriverOpts' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Labels' }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Scope' }})
    
