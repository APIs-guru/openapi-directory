from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import publisherprofile


@dataclass_json
@dataclass
class ListPublisherProfilesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    publisher_profiles: Optional[List[publisherprofile.PublisherProfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisherProfiles' }})
    
