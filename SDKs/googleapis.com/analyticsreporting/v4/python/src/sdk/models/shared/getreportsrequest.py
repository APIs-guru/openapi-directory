from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetReportsRequest:
    r"""GetReportsRequest
    The batch request containing multiple report request.
    """
    
    report_requests: Optional[List[ReportRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportRequests') }})
    use_resource_quotas: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useResourceQuotas') }})
    
