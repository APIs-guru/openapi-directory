from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import detecttextfilters
from . import image


@dataclass_json
@dataclass
class DetectTextRequest:
    filters: Optional[detecttextfilters.DetectTextFilters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    image: image.Image = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Image' }})
    
