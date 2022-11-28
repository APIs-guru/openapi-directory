from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchPlaceIndexForTextResponse:
    results: List[SearchForTextResult] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Results') }})
    summary: SearchPlaceIndexForTextSummary = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Summary') }})
    
