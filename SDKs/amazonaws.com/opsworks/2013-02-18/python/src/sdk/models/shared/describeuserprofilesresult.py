from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userprofile


@dataclass_json
@dataclass
class DescribeUserProfilesResult:
    user_profiles: Optional[List[userprofile.UserProfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserProfiles' }})
    
