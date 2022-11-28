from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProductRecommendation:
    r"""ProductRecommendation
    This type is used by the productRecommendation container, which is returned if eBay has found an eBay catalog product that may be a match for the product (or product variation) that has a listing violation. Note: eBay catalog product adoption is not enforced at this time, so product adoption violations are no longer returned. Due to this fact, this type and productRecommendation container are not currently applicable.
    """
    
    epid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('epid') }})
    
