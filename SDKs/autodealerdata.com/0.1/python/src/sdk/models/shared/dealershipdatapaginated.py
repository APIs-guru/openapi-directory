from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DealershipDataPaginated:
    dealers: List[DealershipData] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealers') }})
    max_pages: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxPages') }})
    page: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    
