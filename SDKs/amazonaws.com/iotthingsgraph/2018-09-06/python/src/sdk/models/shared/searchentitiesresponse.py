from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import entitydescription


@dataclass_json
@dataclass
class SearchEntitiesResponse:
    descriptions: Optional[List[entitydescription.EntityDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'descriptions' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
