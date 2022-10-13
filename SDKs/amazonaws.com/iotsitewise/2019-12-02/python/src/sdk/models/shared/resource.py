from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import portalresource
from . import projectresource


@dataclass_json
@dataclass
class Resource:
    portal: Optional[portalresource.PortalResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portal' }})
    project: Optional[projectresource.ProjectResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    
