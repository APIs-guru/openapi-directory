from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accesslevel


@dataclass_json
@dataclass
class ReplaceAccessLevelsRequest:
    access_levels: Optional[List[accesslevel.AccessLevel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessLevels' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    
