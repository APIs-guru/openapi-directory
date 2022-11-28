from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchContentMatch:
    lines: Optional[List[SearchLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lines') }})
    
