from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourcespec


@dataclass_json
@dataclass
class JupyterServerAppSettings:
    default_resource_spec: Optional[resourcespec.ResourceSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultResourceSpec' }})
    lifecycle_config_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LifecycleConfigArns' }})
    
