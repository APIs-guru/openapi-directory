from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GcpUserAccessBinding:
    r"""GcpUserAccessBinding
    Restricts access to Cloud Console and Google Cloud APIs for a set of users using Context-Aware Access.
    """
    
    access_levels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessLevels') }})
    group_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupKey') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
