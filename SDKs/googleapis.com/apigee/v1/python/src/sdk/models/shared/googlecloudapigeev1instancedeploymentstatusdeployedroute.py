from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute:
    basepath: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basepath' }})
    envgroup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envgroup' }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    
