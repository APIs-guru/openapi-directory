from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import containerimage


@dataclass_json
@dataclass
class GetContainerImagesResult:
    container_images: Optional[List[containerimage.ContainerImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerImages' }})
    
