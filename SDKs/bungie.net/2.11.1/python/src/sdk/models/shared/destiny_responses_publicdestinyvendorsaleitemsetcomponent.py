from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DestinyResponsesPublicDestinyVendorSaleItemSetComponent:
    sale_items: Optional[dict[str, DestinyComponentsVendorsDestinyPublicVendorSaleItemComponent]] = field(default=None)
    
