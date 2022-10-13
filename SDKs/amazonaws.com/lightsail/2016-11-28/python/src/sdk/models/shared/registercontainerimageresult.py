from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import containerimage


@dataclass_json
@dataclass
class RegisterContainerImageResult:
    container_image: Optional[containerimage.ContainerImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerImage' }})
    
