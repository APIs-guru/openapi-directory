from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListEnvironmentGroupsResponse:
    r"""GoogleCloudApigeeV1ListEnvironmentGroupsResponse
    Response for ListEnvironmentGroups.
    """
    
    environment_groups: Optional[List[GoogleCloudApigeeV1EnvironmentGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentGroups') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
