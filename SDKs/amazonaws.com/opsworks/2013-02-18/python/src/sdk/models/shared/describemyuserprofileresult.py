from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import selfuserprofile


@dataclass_json
@dataclass
class DescribeMyUserProfileResult:
    user_profile: Optional[selfuserprofile.SelfUserProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserProfile' }})
    
