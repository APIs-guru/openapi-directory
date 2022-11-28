from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EntityUserLinks:
    r"""EntityUserLinks
    An entity user link collection provides a list of Analytics ACL links Each resource in this collection corresponds to a single link.
    """
    
    items: Optional[List[EntityUserLink]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    items_per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemsPerPage') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextLink') }})
    previous_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousLink') }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startIndex') }})
    total_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults') }})
    
