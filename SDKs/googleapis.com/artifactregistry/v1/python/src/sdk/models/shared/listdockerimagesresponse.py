from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dockerimage


@dataclass_json
@dataclass
class ListDockerImagesResponse:
    docker_images: Optional[List[dockerimage.DockerImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerImages' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
