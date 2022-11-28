from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DescribeDbLogFilesDetails:
    last_written: Optional[int] = field(default=None)
    log_file_name: Optional[str] = field(default=None)
    size: Optional[int] = field(default=None)
    
