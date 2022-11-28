from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BigOvenModelAPIRecipeNoteList:
    result_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultCount') }})
    results: Optional[List[BigOvenModelAPIRecipeNote]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Results') }})
    
