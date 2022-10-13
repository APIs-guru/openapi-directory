from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import matchingresource


@dataclass_json
@dataclass
class SearchResourcesResponse:
    matching_resources: Optional[List[matchingresource.MatchingResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchingResources' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
