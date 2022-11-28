from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListAPIProxiesResponse:
    r"""GoogleCloudApigeeV1ListAPIProxiesResponse
    To change this message, in the same CL add a change log in go/changing-api-proto-breaks-ui
    """
    
    proxies: Optional[List[GoogleCloudApigeeV1APIProxy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxies') }})
    
