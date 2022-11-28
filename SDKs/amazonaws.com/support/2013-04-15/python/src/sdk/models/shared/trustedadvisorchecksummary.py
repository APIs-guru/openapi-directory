from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TrustedAdvisorCheckSummary:
    r"""TrustedAdvisorCheckSummary
    A summary of a Trusted Advisor check result, including the alert status, last refresh, and number of resources examined.
    """
    
    category_specific_summary: TrustedAdvisorCategorySpecificSummary = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categorySpecificSummary') }})
    check_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkId') }})
    resources_summary: TrustedAdvisorResourcesSummary = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcesSummary') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    timestamp: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    has_flagged_resources: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasFlaggedResources') }})
    
