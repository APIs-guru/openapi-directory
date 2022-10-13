from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import searchforpositionresult
from . import searchplaceindexforpositionsummary


@dataclass_json
@dataclass
class SearchPlaceIndexForPositionResponse:
    results: List[searchforpositionresult.SearchForPositionResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Results' }})
    summary: searchplaceindexforpositionsummary.SearchPlaceIndexForPositionSummary = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Summary' }})
    
