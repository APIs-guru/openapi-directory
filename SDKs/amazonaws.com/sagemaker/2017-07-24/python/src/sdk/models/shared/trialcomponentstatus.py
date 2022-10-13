from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import trialcomponentprimarystatus_enum


@dataclass_json
@dataclass
class TrialComponentStatus:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    primary_status: Optional[trialcomponentprimarystatus_enum.TrialComponentPrimaryStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryStatus' }})
    
