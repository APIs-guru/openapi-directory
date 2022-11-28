from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FundingStrategy:
    r"""FundingStrategy
    This type defines how the Promoted Listing fee is calculated when fundingModel is set to COST_PER_SALE.
    """
    
    bid_percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidPercentage') }})
    funding_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundingModel') }})
    
