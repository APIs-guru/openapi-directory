from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import appsummary
from . import servergroup
from . import tag


@dataclass_json
@dataclass
class GetAppResponse:
    app_summary: Optional[appsummary.AppSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appSummary' }})
    server_groups: Optional[List[servergroup.ServerGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverGroups' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
