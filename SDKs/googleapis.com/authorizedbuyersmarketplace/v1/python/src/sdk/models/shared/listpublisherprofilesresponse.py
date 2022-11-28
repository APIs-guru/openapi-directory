from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListPublisherProfilesResponse:
    r"""ListPublisherProfilesResponse
    Response message for profiles visible to the buyer.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    publisher_profiles: Optional[List[PublisherProfile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherProfiles') }})
    
