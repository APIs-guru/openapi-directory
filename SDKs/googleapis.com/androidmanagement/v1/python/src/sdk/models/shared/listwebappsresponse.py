from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import webapp


@dataclass_json
@dataclass
class ListWebAppsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    web_apps: Optional[List[webapp.WebApp]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webApps' }})
    
