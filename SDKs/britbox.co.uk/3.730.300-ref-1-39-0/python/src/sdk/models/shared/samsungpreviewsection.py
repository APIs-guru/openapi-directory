from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import samsungpreviewsectiontile


@dataclass_json
@dataclass
class SamsungPreviewSection:
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    tiles: List[samsungpreviewsectiontile.SamsungPreviewSectionTile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tiles' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
