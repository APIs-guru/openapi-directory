from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAPIVersionsResponse:
    r"""ListAPIVersionsResponse
    Response message for ListApiVersions.
    """
    
    api_versions: Optional[List[APIVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiVersions') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
