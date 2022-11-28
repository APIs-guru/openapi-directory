from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProfileFilterLink:
    r"""ProfileFilterLink
    JSON template for an Analytics profile filter link.
    """
    
    filter_ref: Optional[FilterRef] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterRef') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    profile_ref: Optional[ProfileRef] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileRef') }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    

@dataclass_json
@dataclass
class ProfileFilterLinkInput:
    r"""ProfileFilterLinkInput
    JSON template for an Analytics profile filter link.
    """
    
    filter_ref: Optional[FilterRefInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterRef') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    profile_ref: Optional[ProfileRef] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileRef') }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    
