from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ReservedDbInstanceMessage:
    r"""ReservedDbInstanceMessage
     Contains the result of a successful invocation of the <code>DescribeReservedDBInstances</code> action. 
    """
    
    marker: Optional[str] = field(default=None)
    reserved_db_instances: Optional[List[ReservedDbInstance]] = field(default=None)
    
