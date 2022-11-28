from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeCustomKeyStoresResponse:
    custom_key_stores: Optional[List[CustomKeyStoresListEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomKeyStores') }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Truncated') }})
    
