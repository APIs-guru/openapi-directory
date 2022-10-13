from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import adsource


@dataclass_json
@dataclass
class ListAdSourcesResponse:
    ad_sources: Optional[List[adsource.AdSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adSources' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
