from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportUsageBatchRequest:
    r"""ReportUsageBatchRequest
    Specifies the request information for the Batch Usages endpoint.
    """
    
    asset_usages: Optional[List[AssetUsage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset_usages') }})
    
