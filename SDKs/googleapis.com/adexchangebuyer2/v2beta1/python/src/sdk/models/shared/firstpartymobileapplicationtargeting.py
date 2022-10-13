from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FirstPartyMobileApplicationTargeting:
    excluded_app_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedAppIds' }})
    targeted_app_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetedAppIds' }})
    
