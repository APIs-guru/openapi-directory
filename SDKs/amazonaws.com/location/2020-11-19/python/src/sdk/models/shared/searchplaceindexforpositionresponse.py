from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchPlaceIndexForPositionResponse:
    results: List[SearchForPositionResult] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Results') }})
    summary: SearchPlaceIndexForPositionSummary = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Summary') }})
    
