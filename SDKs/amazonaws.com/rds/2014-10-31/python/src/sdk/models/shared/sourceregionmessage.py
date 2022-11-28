from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class SourceRegionMessage:
    r"""SourceRegionMessage
    Contains the result of a successful invocation of the <code>DescribeSourceRegions</code> action.
    """
    
    marker: Optional[str] = field(default=None)
    source_regions: Optional[List[SourceRegion]] = field(default=None)
    
