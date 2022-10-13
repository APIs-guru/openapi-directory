from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import projectcompact
from . import projectcompact


@dataclass_json
@dataclass
class SectionResponse:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    project: Optional[projectcompact.ProjectCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    projects: Optional[List[projectcompact.ProjectCompact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projects' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    
