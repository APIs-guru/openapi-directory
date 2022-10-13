from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import trustedadvisorcheckrefreshstatus


@dataclass_json
@dataclass
class DescribeTrustedAdvisorCheckRefreshStatusesResponse:
    statuses: List[trustedadvisorcheckrefreshstatus.TrustedAdvisorCheckRefreshStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statuses' }})
    
