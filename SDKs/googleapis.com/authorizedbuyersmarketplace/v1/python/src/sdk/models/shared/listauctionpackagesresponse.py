from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import auctionpackage


@dataclass_json
@dataclass
class ListAuctionPackagesResponse:
    auction_packages: Optional[List[auctionpackage.AuctionPackage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auctionPackages' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
