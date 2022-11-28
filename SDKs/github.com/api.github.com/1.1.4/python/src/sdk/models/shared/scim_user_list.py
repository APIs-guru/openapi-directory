from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScimUserList:
    r"""ScimUserList
    SCIM User List
    """
    
    resources: List[ScimUser] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    items_per_page: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemsPerPage') }})
    schemas: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    start_index: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startIndex') }})
    total_results: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults') }})
    
