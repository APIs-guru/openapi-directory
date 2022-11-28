from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TrustedAdvisorCheckResult:
    r"""TrustedAdvisorCheckResult
    The results of a Trusted Advisor check returned by <a>DescribeTrustedAdvisorCheckResult</a>.
    """
    
    category_specific_summary: TrustedAdvisorCategorySpecificSummary = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categorySpecificSummary') }})
    check_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkId') }})
    flagged_resources: List[TrustedAdvisorResourceDetail] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('flaggedResources') }})
    resources_summary: TrustedAdvisorResourcesSummary = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcesSummary') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    timestamp: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    
