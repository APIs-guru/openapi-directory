from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAppProfilesResponse:
    r"""ListAppProfilesResponse
    Response message for BigtableInstanceAdmin.ListAppProfiles.
    """
    
    app_profiles: Optional[List[AppProfile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appProfiles') }})
    failed_locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedLocations') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
