from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourcespec


@dataclass_json
@dataclass
class TensorBoardAppSettings:
    default_resource_spec: Optional[resourcespec.ResourceSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultResourceSpec' }})
    
