from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ValidStorageOptions:
    r"""ValidStorageOptions
    Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <code>DescribeValidDBInstanceModifications</code> action. 
    """
    
    iops_to_storage_ratio: Optional[List[DoubleRange]] = field(default=None)
    provisioned_iops: Optional[List[Range]] = field(default=None)
    storage_size: Optional[List[Range]] = field(default=None)
    storage_type: Optional[str] = field(default=None)
    supports_storage_autoscaling: Optional[bool] = field(default=None)
    
