from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DbInstanceStatusInfo:
    r"""DbInstanceStatusInfo
    Provides a list of status information for a DB instance.
    """
    
    message: Optional[str] = field(default=None)
    normal: Optional[bool] = field(default=None)
    status: Optional[str] = field(default=None)
    status_type: Optional[str] = field(default=None)
    
