from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import appprofile


@dataclass_json
@dataclass
class ListAppProfilesResponse:
    app_profiles: Optional[List[appprofile.AppProfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appProfiles' }})
    failed_locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedLocations' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
