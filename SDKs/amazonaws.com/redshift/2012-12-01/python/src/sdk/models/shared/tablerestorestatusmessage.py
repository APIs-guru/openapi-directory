from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class TableRestoreStatusMessage:
    r"""TableRestoreStatusMessage
    <p/>
    """
    
    marker: Optional[str] = field(default=None)
    table_restore_status_details: Optional[List[TableRestoreStatus]] = field(default=None)
    
