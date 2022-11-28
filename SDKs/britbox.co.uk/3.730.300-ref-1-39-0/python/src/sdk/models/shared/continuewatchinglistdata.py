from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContinueWatchingListData:
    r"""ContinueWatchingListData
    List data for ContinueWatching List
    """
    
    item_inclusions: Optional[dict[str, ContinueWatchingListDataExpansion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemInclusions') }})
    
