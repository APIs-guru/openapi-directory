from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PillarReviewSummary:
    r"""PillarReviewSummary
    A pillar review summary of a lens review.
    """
    
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    pillar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PillarId') }})
    pillar_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PillarName') }})
    risk_counts: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RiskCounts') }})
    
