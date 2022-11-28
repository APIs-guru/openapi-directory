from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeUserProfilesResult:
    r"""DescribeUserProfilesResult
    Contains the response to a <code>DescribeUserProfiles</code> request.
    """
    
    user_profiles: Optional[List[UserProfile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserProfiles') }})
    
