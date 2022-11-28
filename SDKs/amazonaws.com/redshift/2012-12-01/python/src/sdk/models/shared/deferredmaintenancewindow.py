from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class DeferredMaintenanceWindow:
    r"""DeferredMaintenanceWindow
    Describes a deferred maintenance window
    """
    
    defer_maintenance_end_time: Optional[datetime] = field(default=None)
    defer_maintenance_identifier: Optional[str] = field(default=None)
    defer_maintenance_start_time: Optional[datetime] = field(default=None)
    
