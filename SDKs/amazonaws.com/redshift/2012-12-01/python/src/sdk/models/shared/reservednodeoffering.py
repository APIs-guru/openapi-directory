from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class ReservedNodeOffering:
    r"""ReservedNodeOffering
    Describes a reserved node offering.
    """
    
    currency_code: Optional[str] = field(default=None)
    duration: Optional[int] = field(default=None)
    fixed_price: Optional[float] = field(default=None)
    node_type: Optional[str] = field(default=None)
    offering_type: Optional[str] = field(default=None)
    recurring_charges: Optional[List[RecurringCharge]] = field(default=None)
    reserved_node_offering_id: Optional[str] = field(default=None)
    reserved_node_offering_type: Optional[ReservedNodeOfferingTypeEnum] = field(default=None)
    usage_price: Optional[float] = field(default=None)
    
