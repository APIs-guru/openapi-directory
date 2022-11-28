from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchResults:
    time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    domains: Optional[List[Domains]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domains') }})
    next_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
