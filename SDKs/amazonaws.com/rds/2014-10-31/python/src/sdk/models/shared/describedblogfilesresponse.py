from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeDbLogFilesResponse:
    r"""DescribeDbLogFilesResponse
     The response from a call to <code>DescribeDBLogFiles</code>. 
    """
    
    describe_db_log_files: Optional[List[DescribeDbLogFilesDetails]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
