from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class PurchaseReservedDbInstancesOfferingResult:
    reserved_db_instance: Optional[ReservedDbInstance] = field(default=None)
    
