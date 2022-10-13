from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ApplicationReportingSettings:
    include_removed_apps: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeRemovedApps' }})
    
