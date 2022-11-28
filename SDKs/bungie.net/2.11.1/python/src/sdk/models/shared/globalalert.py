from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class GlobalAlert:
    alert_html: Optional[str] = field(default=None)
    alert_key: Optional[str] = field(default=None)
    alert_level: Optional[int] = field(default=None)
    alert_link: Optional[str] = field(default=None)
    alert_timestamp: Optional[datetime] = field(default=None)
    alert_type: Optional[int] = field(default=None)
    stream_info: Optional[StreamInfo] = field(default=None)
    
