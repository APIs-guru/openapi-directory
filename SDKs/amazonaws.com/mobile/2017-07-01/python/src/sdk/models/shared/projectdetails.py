from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import resource
from . import projectstate_enum


@dataclass_json
@dataclass
class ProjectDetails:
    console_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consoleUrl' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    resources: Optional[List[resource.Resource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    state: Optional[projectstate_enum.ProjectStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
