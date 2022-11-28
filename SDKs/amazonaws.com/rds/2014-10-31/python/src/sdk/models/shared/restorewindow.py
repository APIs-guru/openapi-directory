from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class RestoreWindow:
    r"""RestoreWindow
    Earliest and latest time an instance can be restored to:
    """
    
    earliest_time: Optional[datetime] = field(default=None)
    latest_time: Optional[datetime] = field(default=None)
    
