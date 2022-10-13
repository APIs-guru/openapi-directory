from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import apispec


@dataclass_json
@dataclass
class ListAPISpecsResponse:
    api_specs: Optional[List[apispec.APISpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiSpecs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
