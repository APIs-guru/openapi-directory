from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import itemsummary
from . import itemsummary
from . import itemsummary


@dataclass_json
@dataclass
class ContinueWatchingListDataExpansion:
    episode: Optional[itemsummary.ItemSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'episode' }})
    season: Optional[itemsummary.ItemSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'season' }})
    show: Optional[itemsummary.ItemSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show' }})
    
