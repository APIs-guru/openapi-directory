from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ComplianceSummaryInfo:
    r"""ComplianceSummaryInfo
    This type is used by each unique eBay marketplace and compliance type combination that is returned in the getListingViolationsSummary response to indicate the total number of listing violations in regards to that eBay marketplace and compliance type.
    """
    
    compliance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceType') }})
    listing_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listingCount') }})
    marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceId') }})
    
