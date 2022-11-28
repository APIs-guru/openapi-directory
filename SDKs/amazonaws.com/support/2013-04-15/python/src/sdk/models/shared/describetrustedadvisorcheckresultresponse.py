from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeTrustedAdvisorCheckResultResponse:
    r"""DescribeTrustedAdvisorCheckResultResponse
    The result of the Trusted Advisor check returned by the <a>DescribeTrustedAdvisorCheckResult</a> operation.
    """
    
    result: Optional[TrustedAdvisorCheckResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
