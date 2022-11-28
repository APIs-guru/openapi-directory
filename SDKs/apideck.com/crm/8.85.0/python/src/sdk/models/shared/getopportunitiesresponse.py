from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetOpportunitiesResponse:
    data: List[Opportunity] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    operation: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    resource: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    service: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_code: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_code') }})
    links: Optional[Links] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    meta: Optional[Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    
