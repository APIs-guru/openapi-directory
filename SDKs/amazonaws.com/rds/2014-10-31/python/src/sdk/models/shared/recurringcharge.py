from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RecurringCharge:
    r"""RecurringCharge
     This data type is used as a response element in the <code>DescribeReservedDBInstances</code> and <code>DescribeReservedDBInstancesOfferings</code> actions. 
    """
    
    recurring_charge_amount: Optional[float] = field(default=None)
    recurring_charge_frequency: Optional[str] = field(default=None)
    
