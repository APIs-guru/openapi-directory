from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import parameterstringfilter


@dataclass_json
@dataclass
class GetParametersByPathRequest:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    parameter_filters: Optional[List[parameterstringfilter.ParameterStringFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterFilters' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    recursive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Recursive' }})
    with_decryption: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WithDecryption' }})
    
