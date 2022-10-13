from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import usercompact
from . import usercompact
from . import customfieldsettingcompact
from . import customfieldcompact
from . import usercompact
from . import usercompact

class ProjectResponseColorEnum(str, Enum):
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

class ProjectResponseCurrentStatusColorEnum(str, Enum):
    GREEN = "green"
    YELLOW = "yellow"
    RED = "red"
    BLUE = "blue"


@dataclass_json
@dataclass
class ProjectResponseCurrentStatus:
    author: Optional[usercompact.UserCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    color: ProjectResponseCurrentStatusColorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[usercompact.UserCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    html_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_text' }})
    modified_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
class ProjectResponseDefaultViewEnum(str, Enum):
    LIST = "list"
    BOARD = "board"
    CALENDAR = "calendar"
    TIMELINE = "timeline"

class ProjectResponseIconEnum(str, Enum):
    LIST = "list"
    BOARD = "board"
    TIMELINE = "timeline"
    CALENDAR = "calendar"
    ROCKET = "rocket"
    PEOPLE = "people"
    GRAPH = "graph"
    STAR = "star"
    BUG = "bug"
    LIGHT_BULB = "light_bulb"
    GLOBE = "globe"
    GEAR = "gear"
    NOTEBOOK = "notebook"
    COMPUTER = "computer"
    CHECK = "check"
    TARGET = "target"
    HTML = "html"
    MEGAPHONE = "megaphone"
    CHAT_BUBBLES = "chat_bubbles"
    BRIEFCASE = "briefcase"
    PAGE_LAYOUT = "page_layout"
    MOUNTAIN_FLAG = "mountain_flag"
    PUZZLE = "puzzle"
    PRESENTATION = "presentation"
    LINE_AND_SYMBOLS = "line_and_symbols"
    SPEED_DIAL = "speed_dial"
    RIBBON = "ribbon"
    SHOE = "shoe"
    SHOPPING_BASKET = "shopping_basket"
    MAP = "map"
    TICKET = "ticket"
    COINS = "coins"


@dataclass_json
@dataclass
class ProjectResponseOwner:
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    

@dataclass_json
@dataclass
class ProjectResponseTeam:
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    

@dataclass_json
@dataclass
class ProjectResponseWorkspace:
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    

@dataclass_json
@dataclass
class ProjectResponse:
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archived' }})
    color: Optional[ProjectResponseColorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    current_status: Optional[ProjectResponseCurrentStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_status' }})
    custom_field_settings: Optional[List[customfieldsettingcompact.CustomFieldSettingCompact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_field_settings' }})
    custom_fields: Optional[List[customfieldcompact.CustomFieldCompact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    default_view: Optional[ProjectResponseDefaultViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_view' }})
    due_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'due_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    due_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'due_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    followers: Optional[List[usercompact.UserCompact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers' }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    html_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_notes' }})
    icon: Optional[ProjectResponseIconEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon' }})
    is_template: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_template' }})
    members: Optional[List[usercompact.UserCompact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    modified_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    owner: Optional[ProjectResponseOwner] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    permalink_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permalink_url' }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    start_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    team: Optional[ProjectResponseTeam] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team' }})
    workspace: Optional[ProjectResponseWorkspace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspace' }})
    
