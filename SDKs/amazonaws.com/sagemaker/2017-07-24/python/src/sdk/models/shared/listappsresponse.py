from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import appdetails


@dataclass_json
@dataclass
class ListAppsResponse:
    apps: Optional[List[appdetails.AppDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Apps' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
