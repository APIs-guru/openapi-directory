from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import mobileapplicationtargeting
from . import urltargeting


@dataclass_json
@dataclass
class PlacementTargeting:
    mobile_application_targeting: Optional[mobileapplicationtargeting.MobileApplicationTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileApplicationTargeting' }})
    url_targeting: Optional[urltargeting.URLTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlTargeting' }})
    
