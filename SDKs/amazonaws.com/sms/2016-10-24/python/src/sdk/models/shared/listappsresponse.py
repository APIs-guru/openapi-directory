from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import appsummary


@dataclass_json
@dataclass
class ListAppsResponse:
    apps: Optional[List[appsummary.AppSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apps' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
