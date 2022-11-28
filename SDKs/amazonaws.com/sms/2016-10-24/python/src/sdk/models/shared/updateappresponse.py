from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateAppResponse:
    app_summary: Optional[AppSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appSummary') }})
    server_groups: Optional[List[ServerGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverGroups') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
