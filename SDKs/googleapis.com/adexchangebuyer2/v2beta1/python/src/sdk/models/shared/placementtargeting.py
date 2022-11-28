from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlacementTargeting:
    r"""PlacementTargeting
    Represents targeting about where the ads can appear, for example, certain sites or mobile applications. Different placement targeting types will be logically OR'ed.
    """
    
    mobile_application_targeting: Optional[MobileApplicationTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileApplicationTargeting') }})
    url_targeting: Optional[URLTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlTargeting') }})
    
