from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SubscribedWorkteam:
    listing_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListingId' }})
    marketplace_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MarketplaceDescription' }})
    marketplace_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MarketplaceTitle' }})
    seller_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SellerName' }})
    workteam_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkteamArn' }})
    
