from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DescribeDbLogFilesDetails:
    r"""DescribeDbLogFilesDetails
    This data type is used as a response element to <code>DescribeDBLogFiles</code>.
    """
    
    last_written: Optional[int] = field(default=None)
    log_file_name: Optional[str] = field(default=None)
    size: Optional[int] = field(default=None)
    
