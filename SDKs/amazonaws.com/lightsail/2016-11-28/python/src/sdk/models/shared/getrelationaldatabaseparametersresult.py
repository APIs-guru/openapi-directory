from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import relationaldatabaseparameter


@dataclass_json
@dataclass
class GetRelationalDatabaseParametersResult:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    parameters: Optional[List[relationaldatabaseparameter.RelationalDatabaseParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    
