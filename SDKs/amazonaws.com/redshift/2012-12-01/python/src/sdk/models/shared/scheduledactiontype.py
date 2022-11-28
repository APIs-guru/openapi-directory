from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ScheduledActionType:
    r"""ScheduledActionType
    The action type that specifies an Amazon Redshift API operation that is supported by the Amazon Redshift scheduler. 
    """
    
    pause_cluster: Optional[PauseClusterMessage] = field(default=None)
    resize_cluster: Optional[ResizeClusterMessage] = field(default=None)
    resume_cluster: Optional[ResumeClusterMessage] = field(default=None)
    
