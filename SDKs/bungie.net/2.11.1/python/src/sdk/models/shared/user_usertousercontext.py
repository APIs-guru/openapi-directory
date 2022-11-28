from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class UserUserToUserContext:
    global_ignore_end_date: Optional[datetime] = field(default=None)
    ignore_status: Optional[IgnoresIgnoreResponse] = field(default=None)
    is_following: Optional[bool] = field(default=None)
    
