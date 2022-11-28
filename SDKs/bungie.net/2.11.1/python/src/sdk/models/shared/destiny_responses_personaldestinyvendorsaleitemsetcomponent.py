from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DestinyResponsesPersonalDestinyVendorSaleItemSetComponent:
    sale_items: Optional[dict[str, DestinyEntitiesVendorsDestinyVendorSaleItemComponent]] = field(default=None)
    
