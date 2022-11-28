from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServerGroup:
    r"""ServerGroup
    Logical grouping of servers.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    server_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverGroupId') }})
    server_list: Optional[List[Server]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverList') }})
    
