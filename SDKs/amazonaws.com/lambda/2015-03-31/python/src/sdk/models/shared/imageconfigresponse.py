from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import imageconfigerror
from . import imageconfig


@dataclass_json
@dataclass
class ImageConfigResponse:
    error: Optional[imageconfigerror.ImageConfigError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    image_config: Optional[imageconfig.ImageConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageConfig' }})
    
