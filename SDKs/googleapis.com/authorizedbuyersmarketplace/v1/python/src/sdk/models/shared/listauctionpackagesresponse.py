from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAuctionPackagesResponse:
    r"""ListAuctionPackagesResponse
    Response message for listing auction packages.
    """
    
    auction_packages: Optional[List[AuctionPackage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auctionPackages') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
