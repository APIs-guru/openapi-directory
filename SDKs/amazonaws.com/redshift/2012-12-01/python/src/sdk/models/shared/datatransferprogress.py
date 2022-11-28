from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DataTransferProgress:
    r"""DataTransferProgress
    Describes the status of a cluster while it is in the process of resizing with an incremental resize.
    """
    
    current_rate_in_mega_bytes_per_second: Optional[float] = field(default=None)
    data_transferred_in_mega_bytes: Optional[int] = field(default=None)
    elapsed_time_in_seconds: Optional[int] = field(default=None)
    estimated_time_to_completion_in_seconds: Optional[int] = field(default=None)
    status: Optional[str] = field(default=None)
    total_data_in_mega_bytes: Optional[int] = field(default=None)
    
