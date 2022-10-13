from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import app


@dataclass_json
@dataclass
class DescribeAppsResult:
    apps: Optional[List[app.App]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Apps' }})
    
