from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetReportsResponse:
    r"""GetReportsResponse
    The main response class which holds the reports from the Reporting API `batchGet` call.
    """
    
    query_cost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryCost') }})
    reports: Optional[List[Report]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reports') }})
    resource_quotas_remaining: Optional[ResourceQuotasRemaining] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceQuotasRemaining') }})
    
