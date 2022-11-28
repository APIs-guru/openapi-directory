from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListData:
    r"""ListData
    Extra data to accompany ItemList content. The (single) key in the object is
    the list name and the data changes depending on the list
    
    """
    
    continue_watching: Optional[ContinueWatchingListData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContinueWatching') }})
    
