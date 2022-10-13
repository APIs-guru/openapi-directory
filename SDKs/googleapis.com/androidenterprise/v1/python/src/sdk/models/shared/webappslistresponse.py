from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import webapp


@dataclass_json
@dataclass
class WebAppsListResponse:
    web_app: Optional[List[webapp.WebApp]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webApp' }})
    
