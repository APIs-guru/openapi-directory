from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DashboardValidationMessage:
    r"""DashboardValidationMessage
    An error or warning for the operation.
    """
    
    data_path: Optional[str] = field(default=None)
    message: Optional[str] = field(default=None)
    
