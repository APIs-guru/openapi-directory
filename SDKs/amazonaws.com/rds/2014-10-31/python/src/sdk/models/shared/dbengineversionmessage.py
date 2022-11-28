from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DbEngineVersionMessage:
    r"""DbEngineVersionMessage
     Contains the result of a successful invocation of the <code>DescribeDBEngineVersions</code> action. 
    """
    
    db_engine_versions: Optional[List[DbEngineVersion]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
