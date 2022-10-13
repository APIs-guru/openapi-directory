from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import searchfortextresult
from . import searchplaceindexfortextsummary


@dataclass_json
@dataclass
class SearchPlaceIndexForTextResponse:
    results: List[searchfortextresult.SearchForTextResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Results' }})
    summary: searchplaceindexfortextsummary.SearchPlaceIndexForTextSummary = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Summary' }})
    
