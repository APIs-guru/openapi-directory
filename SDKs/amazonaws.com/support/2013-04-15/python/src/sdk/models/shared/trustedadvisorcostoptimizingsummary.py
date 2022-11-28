from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TrustedAdvisorCostOptimizingSummary:
    r"""TrustedAdvisorCostOptimizingSummary
    The estimated cost savings that might be realized if the recommended operations are taken.
    """
    
    estimated_monthly_savings: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedMonthlySavings') }})
    estimated_percent_monthly_savings: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedPercentMonthlySavings') }})
    
