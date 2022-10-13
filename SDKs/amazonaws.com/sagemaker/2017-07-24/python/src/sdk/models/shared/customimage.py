from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomImage:
    app_image_config_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppImageConfigName' }})
    image_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageName' }})
    image_version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageVersionNumber' }})
    
