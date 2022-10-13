from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import buyer
from . import seller


@dataclass_json
@dataclass
class MarketplaceDealParty:
    buyer: Optional[buyer.Buyer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyer' }})
    seller: Optional[seller.Seller] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seller' }})
    
