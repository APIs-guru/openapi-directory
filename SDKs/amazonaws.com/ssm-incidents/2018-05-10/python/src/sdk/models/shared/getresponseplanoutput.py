from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetResponsePlanOutput:
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    incident_template: IncidentTemplate = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incidentTemplate') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    actions: Optional[List[Action]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    chat_channel: Optional[ChatChannel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chatChannel') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    engagements: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engagements') }})
    
