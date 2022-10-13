from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import action
from . import chatchannel
from . import incidenttemplate


@dataclass_json
@dataclass
class GetResponsePlanOutput:
    actions: Optional[List[action.Action]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    chat_channel: Optional[chatchannel.ChatChannel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chatChannel' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    engagements: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engagements' }})
    incident_template: incidenttemplate.IncidentTemplate = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incidentTemplate' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
