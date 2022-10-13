from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import playmediacontrolactivity
from . import playmediacontrolcommandset
from . import playmediacontrolscheme_enum


@dataclass_json
@dataclass
class PlayMediaControl:
    activity: Optional[playmediacontrolactivity.PlayMediaControlActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activity' }})
    commands: Optional[playmediacontrolcommandset.PlayMediaControlCommandSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commands' }})
    scheme: playmediacontrolscheme_enum.PlayMediaControlSchemeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheme' }})
    
