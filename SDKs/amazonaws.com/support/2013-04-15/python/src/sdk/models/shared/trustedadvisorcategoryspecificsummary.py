from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import trustedadvisorcostoptimizingsummary


@dataclass_json
@dataclass
class TrustedAdvisorCategorySpecificSummary:
    cost_optimizing: Optional[trustedadvisorcostoptimizingsummary.TrustedAdvisorCostOptimizingSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costOptimizing' }})
    
