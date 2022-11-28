from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class PurchaseReservedNodeOfferingResult:
    reserved_node: Optional[ReservedNode] = field(default=None)
    
