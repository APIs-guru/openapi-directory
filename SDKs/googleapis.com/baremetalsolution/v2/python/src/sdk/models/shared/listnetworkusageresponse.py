from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListNetworkUsageResponse:
    r"""ListNetworkUsageResponse
    Response with Networks with IPs
    """
    
    networks: Optional[List[NetworkUsage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    
