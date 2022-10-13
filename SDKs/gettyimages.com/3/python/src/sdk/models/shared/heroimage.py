from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import heroimagedisplaysize


@dataclass_json
@dataclass
class HeroImage:
    display_sizes: Optional[List[heroimagedisplaysize.HeroImageDisplaySize]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_sizes' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
