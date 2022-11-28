from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReplaceAccessLevelsRequest:
    r"""ReplaceAccessLevelsRequest
    A request to replace all existing Access Levels in an Access Policy with the Access Levels provided. This is done atomically.
    """
    
    access_levels: Optional[List[AccessLevel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessLevels') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    
