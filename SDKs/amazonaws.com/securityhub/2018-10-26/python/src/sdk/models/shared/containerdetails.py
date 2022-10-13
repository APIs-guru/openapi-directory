from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ContainerDetails:
    image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageId' }})
    image_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageName' }})
    launched_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LaunchedAt' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
