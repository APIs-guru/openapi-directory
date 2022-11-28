from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class ApplicationsDatapoint:
    count: Optional[float] = field(default=None)
    time: Optional[datetime] = field(default=None)
    
