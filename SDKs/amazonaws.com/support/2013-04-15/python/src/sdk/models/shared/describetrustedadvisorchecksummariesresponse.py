from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeTrustedAdvisorCheckSummariesResponse:
    r"""DescribeTrustedAdvisorCheckSummariesResponse
    The summaries of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckSummaries</a> operation.
    """
    
    summaries: List[TrustedAdvisorCheckSummary] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('summaries') }})
    
