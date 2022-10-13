from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import subscribedworkteam


@dataclass_json
@dataclass
class DescribeSubscribedWorkteamResponse:
    subscribed_workteam: subscribedworkteam.SubscribedWorkteam = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubscribedWorkteam' }})
    
