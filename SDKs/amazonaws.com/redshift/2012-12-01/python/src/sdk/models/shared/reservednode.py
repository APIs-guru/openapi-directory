from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class ReservedNode:
    r"""ReservedNode
    Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. 
    """
    
    currency_code: Optional[str] = field(default=None)
    duration: Optional[int] = field(default=None)
    fixed_price: Optional[float] = field(default=None)
    node_count: Optional[int] = field(default=None)
    node_type: Optional[str] = field(default=None)
    offering_type: Optional[str] = field(default=None)
    recurring_charges: Optional[List[RecurringCharge]] = field(default=None)
    reserved_node_id: Optional[str] = field(default=None)
    reserved_node_offering_id: Optional[str] = field(default=None)
    reserved_node_offering_type: Optional[ReservedNodeOfferingTypeEnum] = field(default=None)
    start_time: Optional[datetime] = field(default=None)
    state: Optional[str] = field(default=None)
    usage_price: Optional[float] = field(default=None)
    
