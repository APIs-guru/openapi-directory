from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TrustedAdvisorCategorySpecificSummary:
    r"""TrustedAdvisorCategorySpecificSummary
    The container for summary information that relates to the category of the Trusted Advisor check.
    """
    
    cost_optimizing: Optional[TrustedAdvisorCostOptimizingSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costOptimizing') }})
    
