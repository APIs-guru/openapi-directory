from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import site


@dataclass_json
@dataclass
class ListSitesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    sites: Optional[List[site.Site]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sites' }})
    
