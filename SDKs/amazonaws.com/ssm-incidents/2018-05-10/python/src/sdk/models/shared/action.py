from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import ssmautomation


@dataclass_json
@dataclass
class Action:
    ssm_automation: Optional[ssmautomation.SsmAutomation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssmAutomation' }})
    
