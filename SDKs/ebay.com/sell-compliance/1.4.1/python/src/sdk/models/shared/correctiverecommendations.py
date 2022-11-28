from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CorrectiveRecommendations:
    r"""CorrectiveRecommendations
    This type is used by the correctiveRecommendations container, which is returned if eBay has suggestions for how to correct the given violation.
    """
    
    aspect_recommendations: Optional[List[AspectRecommendations]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aspectRecommendations') }})
    product_recommendation: Optional[ProductRecommendation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productRecommendation') }})
    
