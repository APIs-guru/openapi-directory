from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateWorkteamRequest:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    member_definitions: List[MemberDefinition] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemberDefinitions') }})
    workteam_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkteamName') }})
    notification_configuration: Optional[NotificationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationConfiguration') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    workforce_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkforceName') }})
    
