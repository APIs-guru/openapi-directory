from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TrustedAdvisorCostOptimizingSummary:
    estimated_monthly_savings: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedMonthlySavings' }})
    estimated_percent_monthly_savings: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedPercentMonthlySavings' }})
    
