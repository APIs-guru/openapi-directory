from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class AuctionContextAuctionTypesEnum(str, Enum):
    OPEN_AUCTION = "OPEN_AUCTION"
    DIRECT_DEALS = "DIRECT_DEALS"


@dataclass_json
@dataclass
class AuctionContext:
    auction_types: Optional[List[AuctionContextAuctionTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auctionTypes' }})
    
