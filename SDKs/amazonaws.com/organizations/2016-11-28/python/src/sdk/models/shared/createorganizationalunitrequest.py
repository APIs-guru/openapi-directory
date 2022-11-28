from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateOrganizationalUnitRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    parent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentId') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
