from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListAsyncQueriesResponse:
    r"""GoogleCloudApigeeV1ListAsyncQueriesResponse
    The response for ListAsyncQueries.
    """
    
    queries: Optional[List[GoogleCloudApigeeV1AsyncQuery]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queries') }})
    
