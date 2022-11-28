from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PortfolioResponseColorEnum(str, Enum):
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


@dataclass_json
@dataclass
class PortfolioResponseWorkspace:
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    

@dataclass_json
@dataclass
class PortfolioResponse:
    color: Optional[PortfolioResponseColorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[UserCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    custom_field_settings: Optional[List[CustomFieldSettingResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_field_settings') }})
    due_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_on'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    members: Optional[List[UserCompact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[UserCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    permalink_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permalink_url') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    start_on: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_on'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    workspace: Optional[PortfolioResponseWorkspace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    
