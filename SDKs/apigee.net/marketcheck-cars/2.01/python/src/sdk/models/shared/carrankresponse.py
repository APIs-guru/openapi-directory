from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CarRankResponse:
    r"""CarRankResponse
    Ranking query response
    """
    
    num_ranked: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_ranked') }})
    ranked_listings: Optional[List[CarListingRank]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ranked_listings') }})
    
