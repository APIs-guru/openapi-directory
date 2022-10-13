from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import itemlist


@dataclass_json
@dataclass
class NavContent:
    image_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageType' }})
    list: Optional[itemlist.ItemList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'list' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
