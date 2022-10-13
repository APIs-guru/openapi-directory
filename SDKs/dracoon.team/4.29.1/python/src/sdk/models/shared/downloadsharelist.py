from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import downloadshare
from . import range


@dataclass_json
@dataclass
class DownloadShareList:
    items: List[downloadshare.DownloadShare] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    range: range.Range = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    
