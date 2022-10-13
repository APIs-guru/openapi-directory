from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import workteam


@dataclass_json
@dataclass
class UpdateWorkteamResponse:
    workteam: workteam.Workteam = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Workteam' }})
    
