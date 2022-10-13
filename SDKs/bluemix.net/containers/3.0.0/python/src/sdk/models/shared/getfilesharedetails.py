from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fileshare
from . import fileshareusage


@dataclass_json
@dataclass
class GetFileshareDetails:
    fs: Optional[List[fileshare.Fileshare]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fs' }})
    fs_usage: Optional[List[fileshareusage.FileshareUsage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fsUsage' }})
    volnames: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volnames' }})
    
