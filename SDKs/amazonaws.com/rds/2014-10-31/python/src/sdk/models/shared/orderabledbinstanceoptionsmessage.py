from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class OrderableDbInstanceOptionsMessage:
    r"""OrderableDbInstanceOptionsMessage
     Contains the result of a successful invocation of the <code>DescribeOrderableDBInstanceOptions</code> action. 
    """
    
    marker: Optional[str] = field(default=None)
    orderable_db_instance_options: Optional[List[OrderableDbInstanceOption]] = field(default=None)
    
