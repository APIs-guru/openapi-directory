from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class PutDashboardOutput:
    dashboard_validation_messages: Optional[List[DashboardValidationMessage]] = field(default=None)
    
