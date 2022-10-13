from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userprofiledetails


@dataclass_json
@dataclass
class ListUserProfilesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    user_profiles: Optional[List[userprofiledetails.UserProfileDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserProfiles' }})
    
