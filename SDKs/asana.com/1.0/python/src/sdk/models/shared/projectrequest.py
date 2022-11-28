from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
class ProjectRequestCurrentStatusInput:
    color: ProjectRequestCurrentStatusColorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    author: Optional[UserCompactInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    created_by: Optional[UserCompactInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    html_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_text') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class ProjectRequestDefaultViewEnum(str, Enum):
    LIST = "list"
    BOARD = "board"
    CALENDAR = "calendar"
    TIMELINE = "timeline"


@dataclass_json
@dataclass
class ProjectRequestWorkspaceInput:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class ProjectRequestInput:
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    color: Optional[ProjectRequestColorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    current_status: Optional[ProjectRequestCurrentStatusInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_status') }})
    custom_fields: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    default_view: Optional[ProjectRequestDefaultViewEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_view') }})
    due_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    due_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_on'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    followers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    html_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_notes') }})
    is_template: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_template') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    start_on: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_on'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    workspace: Optional[ProjectRequestWorkspaceInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    
