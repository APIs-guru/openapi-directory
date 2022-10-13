from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import usercompact
from . import usercompact
from . import customfieldsettingcompact
from . import usercompact

class ProjectRequestColorEnum(str, Enum):
    DARK_PINK = "dark-pink"
    DARK_GREEN = "dark-green"
    DARK_BLUE = "dark-blue"
    DARK_RED = "dark-red"
    DARK_TEAL = "dark-teal"
    DARK_BROWN = "dark-brown"
    DARK_ORANGE = "dark-orange"
    DARK_PURPLE = "dark-purple"
    DARK_WARM_GRAY = "dark-warm-gray"
    LIGHT_PINK = "light-pink"
    LIGHT_GREEN = "light-green"
    LIGHT_BLUE = "light-blue"
    LIGHT_RED = "light-red"
    LIGHT_TEAL = "light-teal"
    LIGHT_BROWN = "light-brown"
    LIGHT_ORANGE = "light-orange"
    LIGHT_PURPLE = "light-purple"
    LIGHT_WARM_GRAY = "light-warm-gray"

class ProjectRequestCurrentStatusColorEnum(str, Enum):
    GREEN = "green"
    YELLOW = "yellow"
    RED = "red"
    BLUE = "blue"


@dataclass_json
@dataclass
class ProjectRequestCurrentStatus:
    author: Optional[usercompact.UserCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    color: ProjectRequestCurrentStatusColorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[usercompact.UserCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    html_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_text' }})
    modified_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
class ProjectRequestDefaultViewEnum(str, Enum):
    LIST = "list"
    BOARD = "board"
    CALENDAR = "calendar"
    TIMELINE = "timeline"


@dataclass_json
@dataclass
class ProjectRequestWorkspace:
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    

@dataclass_json
@dataclass
class ProjectRequest:
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archived' }})
    color: Optional[ProjectRequestColorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    current_status: Optional[ProjectRequestCurrentStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_status' }})
    custom_field_settings: Optional[List[customfieldsettingcompact.CustomFieldSettingCompact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_field_settings' }})
    custom_fields: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    default_view: Optional[ProjectRequestDefaultViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_view' }})
    due_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'due_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    due_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'due_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    followers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers' }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    html_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_notes' }})
    is_template: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_template' }})
    members: Optional[List[usercompact.UserCompact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    modified_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    start_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team' }})
    workspace: Optional[ProjectRequestWorkspace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspace' }})
    
