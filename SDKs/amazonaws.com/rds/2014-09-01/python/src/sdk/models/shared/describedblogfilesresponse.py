from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeDbLogFilesResponse:
    describe_db_log_files: Optional[List[DescribeDbLogFilesDetails]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
