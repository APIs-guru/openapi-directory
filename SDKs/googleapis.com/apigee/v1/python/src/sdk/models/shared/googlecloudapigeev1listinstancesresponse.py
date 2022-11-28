from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListInstancesResponse:
    r"""GoogleCloudApigeeV1ListInstancesResponse
    Response for ListInstances.
    """
    
    instances: Optional[List[GoogleCloudApigeeV1Instance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
