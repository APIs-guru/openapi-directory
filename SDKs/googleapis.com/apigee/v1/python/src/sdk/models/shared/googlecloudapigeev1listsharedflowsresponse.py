from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListSharedFlowsResponse:
    r"""GoogleCloudApigeeV1ListSharedFlowsResponse
    To change this message, in the same CL add a change log in go/changing-api-proto-breaks-ui
    """
    
    shared_flows: Optional[List[GoogleCloudApigeeV1SharedFlow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedFlows') }})
    
