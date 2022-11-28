from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ValidDbInstanceModificationsMessage:
    r"""ValidDbInstanceModificationsMessage
    Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action. You can use this information when you call <a>ModifyDBInstance</a>. 
    """
    
    storage: Optional[List[ValidStorageOptions]] = field(default=None)
    
