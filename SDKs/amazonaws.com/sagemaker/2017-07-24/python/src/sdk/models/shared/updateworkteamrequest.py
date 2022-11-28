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
class UpdateWorkteamRequest:
    workteam_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkteamName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    member_definitions: Optional[List[MemberDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemberDefinitions') }})
    notification_configuration: Optional[NotificationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationConfiguration') }})
    
