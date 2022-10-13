from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import paralleldataproperties


@dataclass_json
@dataclass
class ListParallelDataResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    parallel_data_properties_list: Optional[List[paralleldataproperties.ParallelDataProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParallelDataPropertiesList' }})
    
