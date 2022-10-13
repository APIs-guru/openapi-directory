from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import servicenameandresourcetype


@dataclass_json
@dataclass
class ListResourceTypesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    resource_types: Optional[List[servicenameandresourcetype.ServiceNameAndResourceType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceTypes' }})
    
