from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import firstpartymobileapplicationtargeting


@dataclass_json
@dataclass
class MobileApplicationTargeting:
    first_party_targeting: Optional[firstpartymobileapplicationtargeting.FirstPartyMobileApplicationTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstPartyTargeting' }})
    
