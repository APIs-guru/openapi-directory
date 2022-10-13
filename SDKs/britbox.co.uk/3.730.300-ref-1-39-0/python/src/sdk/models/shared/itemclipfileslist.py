from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import itemclipfiles


@dataclass_json
@dataclass
class ItemClipFilesList:
    items: List[itemclipfiles.ItemClipFiles] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
