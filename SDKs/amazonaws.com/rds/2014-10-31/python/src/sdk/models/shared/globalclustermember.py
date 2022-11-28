from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class GlobalClusterMember:
    r"""GlobalClusterMember
     A data structure with information about any primary and secondary clusters associated with an Aurora global database. 
    """
    
    db_cluster_arn: Optional[str] = field(default=None)
    global_write_forwarding_status: Optional[WriteForwardingStatusEnum] = field(default=None)
    is_writer: Optional[bool] = field(default=None)
    readers: Optional[List[str]] = field(default=None)
    
