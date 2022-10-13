from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import trustedadvisorchecksummary


@dataclass_json
@dataclass
class DescribeTrustedAdvisorCheckSummariesResponse:
    summaries: List[trustedadvisorchecksummary.TrustedAdvisorCheckSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summaries' }})
    
