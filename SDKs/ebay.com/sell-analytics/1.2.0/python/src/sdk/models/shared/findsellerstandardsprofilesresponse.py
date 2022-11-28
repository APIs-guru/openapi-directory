from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FindSellerStandardsProfilesResponse:
    r"""FindSellerStandardsProfilesResponse
    The response container for a list of seller profiles.
    """
    
    standards_profiles: Optional[List[StandardsProfile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardsProfiles') }})
    
