from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bigoven_model_api_recipenote


@dataclass_json
@dataclass
class BigOvenModelAPIRecipeNoteList:
    result_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultCount' }})
    results: Optional[List[bigoven_model_api_recipenote.BigOvenModelAPIRecipeNote]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Results' }})
    
