from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeTrustedAdvisorCheckRefreshStatusesResponse:
    r"""DescribeTrustedAdvisorCheckRefreshStatusesResponse
    The statuses of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> operation.
    """
    
    statuses: List[TrustedAdvisorCheckRefreshStatus] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statuses') }})
    
