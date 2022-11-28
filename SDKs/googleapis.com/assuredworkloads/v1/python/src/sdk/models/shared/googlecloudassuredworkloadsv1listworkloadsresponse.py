from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1ListWorkloadsResponse:
    r"""GoogleCloudAssuredworkloadsV1ListWorkloadsResponse
    Response of ListWorkloads endpoint.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    workloads: Optional[List[GoogleCloudAssuredworkloadsV1Workload]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloads') }})
    
