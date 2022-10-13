from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import attribute_enum
from . import image


@dataclass_json
@dataclass
class DetectFacesRequest:
    attributes: Optional[List[attribute_enum.AttributeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    image: image.Image = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Image' }})
    
