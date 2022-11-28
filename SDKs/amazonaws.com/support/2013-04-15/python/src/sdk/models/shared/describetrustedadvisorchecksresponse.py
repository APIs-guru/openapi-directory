from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeTrustedAdvisorChecksResponse:
    r"""DescribeTrustedAdvisorChecksResponse
    Information about the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorChecks</a> operation.
    """
    
    checks: List[TrustedAdvisorCheckDescription] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('checks') }})
    
