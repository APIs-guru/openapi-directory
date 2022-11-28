from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAdSourcesResponse:
    r"""ListAdSourcesResponse
    Response for the ListAdSourcesRequest.
    """
    
    ad_sources: Optional[List[AdSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adSources') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
