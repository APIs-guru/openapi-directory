from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import continuewatchinglistdataexpansion


@dataclass_json
@dataclass
class ContinueWatchingListData:
    item_inclusions: Optional[dict[str, continuewatchinglistdataexpansion.ContinueWatchingListDataExpansion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemInclusions' }})
    
