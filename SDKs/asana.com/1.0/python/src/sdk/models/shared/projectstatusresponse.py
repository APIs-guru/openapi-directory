from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import usercompact
from . import usercompact

class ProjectStatusResponseColorEnum(str, Enum):
    GREEN = "green"
    YELLOW = "yellow"
    RED = "red"
    BLUE = "blue"


@dataclass_json
@dataclass
class ProjectStatusResponse:
    author: Optional[usercompact.UserCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    color: ProjectStatusResponseColorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[usercompact.UserCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    html_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_text' }})
    modified_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
