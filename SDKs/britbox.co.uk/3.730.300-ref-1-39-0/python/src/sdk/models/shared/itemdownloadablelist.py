from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import itemdownloadable


@dataclass_json
@dataclass
class ItemDownloadableList:
    items: List[itemdownloadable.ItemDownloadable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
