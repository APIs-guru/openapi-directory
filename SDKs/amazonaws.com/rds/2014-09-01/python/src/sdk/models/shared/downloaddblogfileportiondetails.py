from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DownloadDbLogFilePortionDetails:
    additional_data_pending: Optional[bool] = field(default=None)
    log_file_data: Optional[str] = field(default=None)
    marker: Optional[str] = field(default=None)
    
