from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class PendingCloudwatchLogsExports:
    r"""PendingCloudwatchLogsExports
    A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.
    """
    
    log_types_to_disable: Optional[List[str]] = field(default=None)
    log_types_to_enable: Optional[List[str]] = field(default=None)
    
