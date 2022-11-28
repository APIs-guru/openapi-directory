from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbSnapshotMessage:
    r"""DbSnapshotMessage
     Contains the result of a successful invocation of the <code>DescribeDBSnapshots</code> action. 
    """
    
    db_snapshots: Optional[List[DbSnapshot]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
