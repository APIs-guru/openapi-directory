from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class PendingMaintenanceAction:
    r"""PendingMaintenanceAction
    Provides information about a pending maintenance action for a resource.
    """
    
    action: Optional[str] = field(default=None)
    auto_applied_after_date: Optional[datetime] = field(default=None)
    current_apply_date: Optional[datetime] = field(default=None)
    description: Optional[str] = field(default=None)
    forced_apply_date: Optional[datetime] = field(default=None)
    opt_in_status: Optional[str] = field(default=None)
    
