from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetDashboardOutput:
    dashboard_arn: Optional[str] = field(default=None)
    dashboard_body: Optional[str] = field(default=None)
    dashboard_name: Optional[str] = field(default=None)
    
