from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class DashboardEntry:
    r"""DashboardEntry
    Represents a specific dashboard.
    """
    
    dashboard_arn: Optional[str] = field(default=None)
    dashboard_name: Optional[str] = field(default=None)
    last_modified: Optional[datetime] = field(default=None)
    size: Optional[int] = field(default=None)
    
