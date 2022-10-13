from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import userfacingmessage
from . import launchappaction
from . import userfacingmessage


@dataclass_json
@dataclass
class SetupAction:
    description: Optional[userfacingmessage.UserFacingMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    launch_app: Optional[launchappaction.LaunchAppAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchApp' }})
    title: Optional[userfacingmessage.UserFacingMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
