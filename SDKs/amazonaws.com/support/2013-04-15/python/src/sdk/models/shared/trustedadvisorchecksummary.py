from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import trustedadvisorcategoryspecificsummary
from . import trustedadvisorresourcessummary


@dataclass_json
@dataclass
class TrustedAdvisorCheckSummary:
    category_specific_summary: trustedadvisorcategoryspecificsummary.TrustedAdvisorCategorySpecificSummary = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categorySpecificSummary' }})
    check_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkId' }})
    has_flagged_resources: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasFlaggedResources' }})
    resources_summary: trustedadvisorresourcessummary.TrustedAdvisorResourcesSummary = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourcesSummary' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    timestamp: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    
