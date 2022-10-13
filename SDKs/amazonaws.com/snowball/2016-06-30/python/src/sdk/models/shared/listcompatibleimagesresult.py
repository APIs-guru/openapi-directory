from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import compatibleimage


@dataclass_json
@dataclass
class ListCompatibleImagesResult:
    compatible_images: Optional[List[compatibleimage.CompatibleImage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompatibleImages' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
