from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AuctionContextAuctionTypesEnum(str, Enum):
    OPEN_AUCTION = "OPEN_AUCTION"
    DIRECT_DEALS = "DIRECT_DEALS"


@dataclass_json
@dataclass
class AuctionContext:
    r"""AuctionContext
    Output only. The auction type the restriction applies to.
    """
    
    auction_types: Optional[List[AuctionContextAuctionTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auctionTypes') }})
    
