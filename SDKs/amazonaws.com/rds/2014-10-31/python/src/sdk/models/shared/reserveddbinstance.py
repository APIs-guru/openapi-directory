from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class ReservedDbInstance:
    r"""ReservedDbInstance
     This data type is used as a response element in the <code>DescribeReservedDBInstances</code> and <code>PurchaseReservedDBInstancesOffering</code> actions. 
    """
    
    currency_code: Optional[str] = field(default=None)
    db_instance_class: Optional[str] = field(default=None)
    db_instance_count: Optional[int] = field(default=None)
    duration: Optional[int] = field(default=None)
    fixed_price: Optional[float] = field(default=None)
    lease_id: Optional[str] = field(default=None)
    multi_az: Optional[bool] = field(default=None)
    offering_type: Optional[str] = field(default=None)
    product_description: Optional[str] = field(default=None)
    recurring_charges: Optional[List[RecurringCharge]] = field(default=None)
    reserved_db_instance_arn: Optional[str] = field(default=None)
    reserved_db_instance_id: Optional[str] = field(default=None)
    reserved_db_instances_offering_id: Optional[str] = field(default=None)
    start_time: Optional[datetime] = field(default=None)
    state: Optional[str] = field(default=None)
    usage_price: Optional[float] = field(default=None)
    
