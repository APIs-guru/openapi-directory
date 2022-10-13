from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import continuewatchinglistdata


@dataclass_json
@dataclass
class ListData:
    continue_watching: Optional[continuewatchinglistdata.ContinueWatchingListData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContinueWatching' }})
    
