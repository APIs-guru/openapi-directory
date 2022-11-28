from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ValidDbInstanceModificationsMessage:
    r"""ValidDbInstanceModificationsMessage
    Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <code>DescribeValidDBInstanceModifications</code> action. You can use this information when you call <code>ModifyDBInstance</code>. 
    """
    
    storage: Optional[List[ValidStorageOptions]] = field(default=None)
    valid_processor_features: Optional[List[AvailableProcessorFeature]] = field(default=None)
    
