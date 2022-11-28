from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DirectDealsList:
    r"""DirectDealsList
    A direct deals feed lists Direct Deals the Ad Exchange buyer account has access to. This includes direct deals set up for the buyer account as well as its merged stream seats.
    """
    
    direct_deals: Optional[List[DirectDeal]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directDeals') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
